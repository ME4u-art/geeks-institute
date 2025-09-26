import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="restaurant_db",
        user="postgres",
        password="root",
        host="localhost",
        port="5432"
    )

class MenuItem:
    def __init__(self, name,price=0,item_id = None):
        self.item_id = item_id
        self.name = name
        self.price = price
    def save(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id",
            (self.name, self.price)
        )
        self.item_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return self
    
    def delete(self):
        if self.item_id is None:
            return
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (self.item_id,))
        conn.commit()
        cur.close()
        conn.close()
        self.item_id = None
    
    def update(self, new_name=None, new_price=None):
        if self.item_id is None:
            return
        conn = get_connection()
        cur = conn.cursor()
        if new_name is not None:
            self.name = new_name
        if new_price is not None:
            self.price = new_price
        cur.execute(
            "UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_id=%s",
            (self.name, self.price, self.item_id)
        )
        conn.commit()
        cur.close()
        conn.close()
        return self