from odonto import app
from flask import render_template, url_for


@app.route('/')
def landing():

    return render_template('landing/index.html')

@app.route('/', methods=['POST'])
def contato_submit():
    return render_template('landing/index.html')