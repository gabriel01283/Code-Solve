import psycopg2

def get_connection():
    return psycopg2.connect(
        database="solve-code",
        user="postgres",
        password="7777",
        host="localhost",
        port="5432"
    )