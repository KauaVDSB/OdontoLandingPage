from odonto import app
from flask import render_template, url_for


@app.route('/')
def landing():

    return render_template('view/index.html')