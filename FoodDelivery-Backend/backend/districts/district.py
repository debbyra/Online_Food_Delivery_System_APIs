from backend.db import db

class District(db.Model):
   __tablename__ = "districts"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(255))
   region_id = db.Column(db.Integer, db.ForeignKey('regions.id')) 
   #relationship
   addresses = db.relationship('Address', backref = 'district')
   
   def __init__(self,name,region_id):
      self.name = name
      self.region_id = region_id