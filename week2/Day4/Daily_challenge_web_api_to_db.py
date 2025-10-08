import requests
import sqlite3
import random

# Connect to SQLite (creates file if it doesn’t exist)
conn = sqlite3.connect("countries.db")
cursor = conn.cursor()

# 2 Create the table
cursor.execute("""
CREATE TABLE IF NOT EXISTS countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    capital TEXT,
    flag TEXT,
    subregion TEXT,
    population INTEGER
)
""")

#  Fetch data from the API
url = "https://restcountries.com/v3.1/all"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    #  Pick 10 random countries
    random_countries = random.sample(data, 10)

    #  Insert into the database
    for country in random_countries:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["N/A"])[0]
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "N/A")
        population = country.get("population", 0)

        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (?, ?, ?, ?, ?)
        """, (name, capital, flag, subregion, population))

    conn.commit()
    print(" 10 random countries inserted successfully!")
else:
    print(" Failed to fetch countries. Status code:", response.status_code)

#  Show inserted rows (optional)
for row in cursor.execute("SELECT * FROM countries"):
    print(row)

conn.close()
