def create_classes(db):
    class Jobs(db.Model):
        __tablename__ = 'data_clean'

        id = db.Column(db.Integer, primary_key=True)
        job_title = db.Column(db.String)
        rating = db.Column(db.Numeric)
        company_name = db.Column(db.String)
        us_state = db.Column(db.String)
        sector = db.Column(db.String)
        avg_salary = db.Column(db.Numeric)
        avg_size = db.Column(db.Numeric)
        company_founded = db.Column(db.Numeric)
        lat = db.Column(db.Numeric)
        lon = db.Column(db.Numeric)
        us_state_name = db.Column(db.String)

        def __repr__(self):
            return '<Jobs %r>' % (self.name)
    return Jobs