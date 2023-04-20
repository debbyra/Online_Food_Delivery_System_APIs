from backend.db import db
#create a class
class Order(db.Model):
   __tablename__ = "orders"
   id = db.Column(db.Integer, primary_key = True)
   description = db.Column(db.String(40), nullable = True)
   quantity = db.Column(db.String(20))
   status = db.Column(db.String(35),nullable = False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   fooditems_id = db.Column(db.Integer, db.ForeignKey('food_items.id'))
   #relationship
   reviews = db.relationship('Review', backref= 'order')
   

#define a function for the class
   def __init__(self,quantity,status,user_id,description,fooditems_id):
      self.quantity = quantity
      self.status = status
      self.user_id = user_id
      self.description = description
      self.fooditems_id = fooditems_id
