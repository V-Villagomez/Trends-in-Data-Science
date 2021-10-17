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

# Create an app
app = Flask(__name__)

#Functions to set endpoints for users

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
