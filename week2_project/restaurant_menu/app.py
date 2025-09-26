from flask import Flask, render_template,request,redirect,url_for
from db import get_connection

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/menu")
def menu():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items ORDER BY item_id")
    items = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("menu.html",items = items)

@app.route("/add", methods=["GET","POST"])
def add_item():
    if request.method == "POST":
        name = request.form["item_name"]
        price = request.form["item_price"]
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items(item_name, item_price)VALUES(%s,%s)",(name,price))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for("menu"))
    return render_template("add_item.html")

@app.route("/delete/<int:item_id>")
def delete_item(item_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (item_id,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for("menu"))

@app.route("/update/<int:item_id>", methods=["GET", "POST"])
def update_item(item_id):
    conn = get_connection()
    cur = conn.cursor()
    if request.method == "POST":
        name = request.form["name"]
        price = request.form["price"]
        cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s", (name, price, item_id))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for("menu"))
    else:
        cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_id = %s", (item_id,))
        item = cur.fetchone()
        cur.close()
        conn.close()
        return render_template("update_item.html", item=item, item_id=item_id)
    


if __name__ == "__main__":
    app.run(debug=True)
