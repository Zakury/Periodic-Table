from flask import Flask, render_template
import json

app = Flask(__name__)

with open("data.json") as file:
    data = json.loads(file.read())

@app.route("/")
def index():
    return render_template("index.html", elements = data)