from backend.db import db

class Review(db.Model):
   __tablename__ = "reviews"
   id = db.Column(db.Integer, primary_key = True)
   food_rev = db.Column(db.String(255), nullable = True)
   orders_id = db.Column(db.Integer, db.ForeignKey('orders.id'))

   def __init__(self,food_rev,orders_id):
      self.food_rev = food_rev
      self.orders_id = orders_id
