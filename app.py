"""
This module runs a Flask application.
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    """
    This function renders the home page.
    """
    return render_template("index.html")


app.run(debug=True)
