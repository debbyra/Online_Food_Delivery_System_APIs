#importing libraries
from flask import jsonify, request, Blueprint
from backend.orders.order import Order
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the orders
all_orders = Blueprint('orders', __name__,url_prefix='/orders') 

#create the orders endpoints
@all_orders.route('/')
def orders():
    
     orders= Order.query.all()
     results = [
            {
                "quantity":order.quantity,
                "status":order.status,
                "drescription":order.description,
                "user_id":order.user_id,
                "fooditems_id":order.fooditems_id
            }for order in orders ]
        
     return {"count":len(orders), "orders":results} 

#creating
@all_orders.route('/create', methods =['POST'])
@jwt_required()
def new_order():
    quantity = request.json['quantity']
    status = request.json['status']
    description = request.json['description']
    user_id = request.json['user_id']
    fooditems_id = request.json['fooditems_id']

    #validations
    if not quantity:
       return jsonify({'error':"quantity is required"}), 400
    
    if not status:
        return jsonify({'error':"status is required!"})
    
    if not user_id:
        return jsonify({'error':'user_id is required!'})
    
    if not fooditems_id:
        return jsonify({'error':'fooditems_id is required!'})


    #storing the neworders data
    new_order = Order(quantity=quantity, status=status, user_id=user_id, description=description, fooditems_id=fooditems_id)

    #add the new foodtypes
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201

#reading 
@all_orders.route('/order/<int:id>', methods = ['GET'])
def get_order(id):
    order = Order.query.get_or_404(id)

    response = {
            "id":order.id,
            "description":order.description,
            "name":order.quantity,
            "status":order.status,
            "fooditems_id":order.fooditems_id,
            "user_id":order.user_id
        } 
    db.session.add(order)
    db.session.commit()
    return jsonify({'message':'successful ', 'order':response})

#updating
@all_orders.route('/update/<int:id>', methods = ['PATCH'])
def update_order(id):
     order = Order.query.get_or_404(id)

     description = request.json['description']
     order.description = description

     db.session.add(order)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_orders.route('/delete/<int:id>',methods = ['DELETE'])
def delete_order(id):
     order = Order.query.get_or_404(id)
     db.session.delete(order)
     db.session.commit()
     return jsonify({'message':f'{order.description} successfully deleted'})