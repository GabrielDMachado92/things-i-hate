# save this as app.py
from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

listItems = []

@app.route("/word")
def word():
    word = request.args.get("word")
    print(word)
    listItems.append(word)
    data = json.dumps(listItems)
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5030)