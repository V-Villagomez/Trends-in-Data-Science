# Import flask and other libraries
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import pandas as pd
#from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from config import db_url

# Create an app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["SQLALCHEMY_DATABASE_URI"] = db_url

db = SQLAlchemy(app)

Jobs = create_classes(db)

# Define a base "/" route with the @app.route() decorator
@app.route("/")
def home():
    return render_template("index.html")

# Define what to do when a user hits the /dashboard route
#app.route("/dashboard")
#def dashboard():
    #return render_template("dashboard.html)"

@app.route("/db_url/careers")
def careers():
    # results = db.session.query(Jobs.job_title, Jobs.rating, Jobs.company_name, Jobs.us_state, Jobs.sector, Jobs.avg_salary, Jobs.avg_size, Jobs.company_founded, Jobs.lat, Jobs.lon, Jobs.us_state_name).all()
    results = db.session.query(Jobs.rating, Jobs.us_state, Jobs.company_founded, Jobs.avg_salary).all()
    print(type(results))
    print(results)

    # arrays contain the data from the table
    rating = [result[0] for result in results]
    us_state = [result[1] for result in results]
    company_founded = [result[2] for result in results]
    avg_salary = [result[2] for result in results]

    # create a list of dictionaries to return the data
    data = [{'rating': a, 'us_state': b, 'company_founded': c, 'avg_salary': d} for a,b,c,d in zip(rating, us_state, company_founded, avg_salary)]

    return jsonify(data)

# Run the server
if __name__ == "__main__":
    app.run()
    #or, which one would I need?
    #app.run(debug=True)
