from flask import Flask, render_template, request
import json

app = Flask(__name__)

with open("data.json") as file:
    data = json.loads(file.read())

@app.route("/")
def periodic_table():
    return render_template("index.html", elements = data)

@app.route("/api/<element_name>")
def element(element_name):
    for element in data:
        if element["name"] == element_name:
            return element