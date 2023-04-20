#importing libraries
from flask import jsonify, request, Blueprint
from backend.db import db
from backend.discounts.discount import Discount
from flask_jwt_extended import jwt_required

#creating a blue print of the discounts

all_discounts = Blueprint('discounts', __name__,url_prefix='/discounts')


#create the addresses endpoints
#get all
@all_discounts.route('/')
def discounts():
    
     discounts= Discount.query.all()
     results = [
            {
                "description":discount.description,
                "status":discount.status,
                "foodsubtypes_id":discount.foodsubtypes_id
            }for discount in discounts ]
        
     return {"count":len(discounts), "discounts":results} 

#creating
@all_discounts.route('/create', methods =['POST'])
@jwt_required()
def new_discount():
    description = request.json['description']
    status = request.json['status']
    foodsubtypes_id = request.json['foodsubtypes_id']

#validations
    if not description:
       return jsonify({'error':"description is required"}), 400
    
    if not status:
        return jsonify({'error':"Status is required!"})
    
    if not foodsubtypes_id:
        return jsonify({'error':"foodtypes_id is required!"})


#storing the address data

    new_discount = Discount(description=description, status=status, foodsubtypes_id=foodsubtypes_id)

#add the new address
    db.session.add(new_discount)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201


#reading 
@all_discounts.route('/discount/<int:id>', methods = ['GET'])
def get_discount(id):
    discount = Discount.query.get_or_404(id)

    response = {
            "id":discount.id,
            "descriptio":discount.description,
            "status":discount.status,
            "foodsubtypes_id":discount.foodsubtypes_id
        } 
    db.session.add(discount)
    db.session.commit()
    return jsonify({'message':'successful', 'discount':response})

#updating
@all_discounts.route('/update/<int:id>', methods = ['PATCH'])
def update_user(id):
     discount = Discount.query.get_or_404(id)

     description = request.json['description']
     discount.description = description

     db.session.add(discount)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_discounts.route('/delete/<int:id>',methods = ['DELETE'])
def delete_discount(id):
     discount = Discount.query.get_or_404(id)
     db.session.delete(discount)
     db.session.commit()
     return jsonify({'message':f'{discount.description} successfully deleted'})