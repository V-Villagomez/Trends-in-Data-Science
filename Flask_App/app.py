# Import flask and other libraries
#from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import pandas as pd
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
#from config import db_url

# Create an app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
#app.config["SQLALCHEMY_DATABASE_URI"] = db_url

# Define a base "/" route with the @app.route() decorator
#@app.route("/")
#def home():
    #return render_template("index.html")

# Define what to do when a user hits the /dashboard route
#app.route("/dashboard")
#def dashboard():
    #return""

#app.route("/dashboarddata")
#def dashboarddata():
    #return""

# Define what to do when a user hits the /racingchart route
#app.route("/racingchart")
#def racingchart():
    #return""

#app.route("/rachingchartdata")
#def racingchartdata():
    #return""


# Run the server
#if __name__ == "__main__":
    #app.run()
    #or, which one would I need?
    #app.run(debug=True)
