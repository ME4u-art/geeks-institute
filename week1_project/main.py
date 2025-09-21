import os 
from flask import Flask,jsonify,request
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
app.config["DEBUG"] = True
app.config["PORT"] = 5001


students = [
    {
        "id": 1, "name": "John Doe", "email": "john.doe@example.com",
        "age": 20, "gender": "male"
    },
    {
        "id": 2, "name": "Jane Doe", "email": "jane.doe@example.com",
        "age": 21, "gender": "female"
    },
    {
        "id": 3, "name": "Jim Doe", "email": "jim.doe@example.com",
        "age": 22, "gender": "male"
    },
    {
        "id": 4, "name": "Jill Doe", "email": "jill.doe@example.com",
        "age": 23, "gender": "female"
    },
    {
        "id": 5, "name": "Jack Doe", "email": "jack.doe@example.com",
        "age": 24, "gender": "male"
    },
]

def find_student(student_id: int)-> dict | None:
    return next((s for s in students if s["id"]==student_id),None)

def next_student_id() -> int:
    return max([s["id"]for s in students], default=0)+1

@app.route("/students",methods = ["GET"])
def get_students():
   try:
       page = int (request.args.get("page",1))
       limit = int(request.args.get("limit",10))
       start = (page-1)*limit 
       end = start +limit
       paginated = students[start:end]
       return jsonify({
           "students":paginated,
           "page":page,
           "limit":limit
       }),200
   except Exception as e:
       return jsonify({"error":"An error occured", "message":str(e)}),200
   

@app.route("/students/<int:student_id>",methods = ["GET"])
def get_student(student_id):
    student = find_student(student_id)
    if not student:
        return jsonify({"error":"Not found"}),404
    return jsonify(student),200

@app.route("/students", methods=["POST"])
def create_student():
    try:
        data = request.get_json(silent=True)
        required = {"name", "email", "age", "gender"}

        if not data or not required.issubset(data):
            return jsonify({"error": "Missing required fields"}), 400

        if not isinstance(data["age"], int):
            return jsonify({"error": "Age must be an integer"}), 400

        new_student = {
            "id": next_student_id(),
            "name": data["name"],
            "email": data["email"],
            "age": data["age"],
            "gender": data["gender"]
        }

        students.append(new_student)
        return jsonify(new_student), 201 

    except Exception as e:
        return jsonify({"error": "An error occurred", "message": str(e)}), 500


@app.route("/students/<int:student_id>",methods=["PUT"])
def update_student(student_id):
    student = find_student(student_id)
    if not student:
         return jsonify({"error":"Not found"}),400
    try:
        data = request.get_json(force=True)
        for field in ["name","email","age","gender"]:
            if field in data:
                student[field] = data[field]
        return jsonify(student),200
    except Exception as e:
        return jsonify ({"error": "error occurred","message":str(e)}),500
    
@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    student = find_student(student_id)
    if not student:
        return jsonify({"error": "Not found"}), 404
    students.remove(student)
    return jsonify(student), 200

@app.errorhandler(404)
def handle_404(_):
    """Global 404 handler."""
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(Exception)
def handle_exception(e):
    """Global exception handler."""
    return jsonify({"error": "An error occurred", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=app.config["PORT"])