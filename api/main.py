from flask import Flask, jsonify, request
from flask_cors import CORS
import json

from database.connections import Config

app = Flask(__name__)
CORS(app)

listItems = []
dbconnection = Config(app)

mysql = dbconnection.config_host()

@app.route("/word",  methods= ["POST", "GET"])
def word():
    print("ENTROU WORD")
    word = request.get_json()
    print("A PALAVRA EH: " + word)
    
    try:
        listItems.append(word)
        data = json.dumps(listItems)
        print("INSERIR PALAVRA: " + word)
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO hatelist VALUES (%s)''', [word])
        mysql.connection.commit()
        cursor.close()
        
    except Exception as e:
        print("Something broke " + e), 500

    return data



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5030)