#importing libraries
from flask import jsonify, request, Blueprint
from backend.addresses.address import Address
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the addresses
all_addresses = Blueprint('addresses', __name__,url_prefix='/addresses') 

#create the addresses endpoints
@all_addresses.route('/')
def addresses():
    
     addresses= Address.query.all()
     results = [
            {
                "description":address.description,
                "district_id":address.district_id,
                "user_id":address.user_id
            }for address in addresses ]
        
     return {"count":len(addresses), "addresses":results} 

#creating or posting
@all_addresses.route('/create', methods =['POST'])
@jwt_required()
def create_new_address():
    description = request.json['description']
    user_id = request.json['user_id']
    district_id = request.json['district_id']

    #validations
    if not description:
       return jsonify({'error':"description is required"}), 400
    
    if not district_id:
        return jsonify({'error':"district_id is required!"})
    
    if not user_id:
        return jsonify({'error':"user_id is required!"})



    #storing the address data
    new_address = Address(description=description, district_id=district_id, user_id=user_id)
    #add the new address
    db.session.add(new_address)
    db.session.commit()
    return jsonify({'success':True, 'message':'new address successfully registered'}), 201

#reading specific
@all_addresses.route('/address/<int:id>', methods = ['GET'])
def get_address(id):
    address = Address.query.get_or_404(id)

    response = {
            "id":address.id,
            "description":address.description,
            "user_id":address.user_id,
            "district_id":address.district_id
        } 
    db.session.add(address)
    db.session.commit()
    return jsonify({'message':'successful' , 'address':response})

#updating
@all_addresses.route('/update/<int:id>', methods = ['PATCH'])
@jwt_required()
def update_address(id):
     address = Address.query.get_or_404(id)
     description = request.json['description']
     address.description = description

     db.session.add(address)
     db.session.commit()
     return jsonify({'message':f'{address.description} successfully patched'})

#deleting
@all_addresses.route('/delete/<int:id>',methods = ['DELETE'])
@jwt_required()
def delete_address(id):
     address = Address.query.get_or_404(id)
     db.session.delete(address)
     db.session.commit()
     return jsonify({'message':f'{address.description} successfully deleted'})