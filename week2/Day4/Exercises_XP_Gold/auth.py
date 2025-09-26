from db import get_connection, hash_password, check_password
import psycopg2

def register_user(username, password):
    """Register a new user with encrypted password."""
    conn = get_connection()
    cur = conn.cursor()
    hashed = hash_password(password).decode('utf-8')  # store as string
    try:
        cur.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s)", 
            (username, hashed)
        )
        conn.commit()
        print(f"User '{username}' registered successfully!")
    except psycopg2.errors.UniqueViolation:
        print(f"Username '{username}' already exists!")
        conn.rollback()
    finally:
        cur.close()
        conn.close()

def login_user(username, password):
    """Return True if login is successful, else False."""
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT password FROM users WHERE username=%s", (username,))
    result = cur.fetchone()
    cur.close()
    conn.close()
    
    if result:
        hashed = result[0]
        if check_password(password, hashed):
            return True
    return False
