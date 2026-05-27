from back_end.database.connection import get_connection

conection = get_connection()

cursor = conection.cursor()

cursor.execute(""" 
CREATE TABLE IF NOT EXISTS recently_search_AI (
    id SERIAL PRIMARY KEY,
    pesquisa TEXT NOT NULL,
    data_pesquisa TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

conection.commit()

print("Tabela criada com sucesso!")

cursor.close()
conection.close()