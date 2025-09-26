import psycopg2
import bcrypt

def get_connection():
    """Connects to PostgreSQL database."""
    return psycopg2.connect(
        dbname="auth_db",
        user="your_user",
        password="your_password",
        host="localhost",
        port="5432"
    )

def hash_password(password):
    """Encrypt password using bcrypt."""
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

def check_password(password, hashed):
    """Check password against hashed value."""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))
