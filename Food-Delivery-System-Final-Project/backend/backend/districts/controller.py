#importing libraries
from flask import jsonify, request, Blueprint
from backend.districts.district import District
from backend.db import db

#creating a blue print of the addresses

all_districts = Blueprint('districts', __name__,url_prefix='/districts') 


#create the districts endpoints
@all_districts.route('/')
def districts():
    
     districts= District.query.all()
     results = [
            {
                "name":district.name,
                "region_id":district.region_id    
            }for district in districts ]
        
     return {"count":len(districts), "districts":results} 

#creating or posting
@all_districts.route('/create', methods =['GET','POST'])
def new_district():
    name = request.json['name']
    region_id = request.json['region_id']

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not region_id:
        return jsonify({'error':"region_id is required!"})

    #check for the constraints
    if District.query.filter_by(name = name).first():
        return jsonify({'message':'the district already exists'})


    #storing the address data
    new_district = District(name=name, region_id=region_id)
    #add the new address
    db.session.add(new_district)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201


#reading 
@all_districts.route('/district/<int:id>', methods = ['GET'])
def get_district(id):
    district = District.query.get_or_404(id)

    response = {
            "id":district.id,
            "name":district.name,
            "region_id":district.region_id
        } 
    db.session.add(district)
    db.session.commit()
    return jsonify({'message':'successful', 'district':response})

#updating
@all_districts.route('/update/<int:id>', methods = ['PATCH'])
def update_district(id):
     district = District.query.get_or_404(id)

     name = request.json['name']
     district.name = name

     db.session.add(district)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_districts.route('/delete/<int:id>',methods = ['DELETE'])
def delete_district(id):
     district = District.query.get_or_404(id)
     db.session.delete(district)
     db.session.commit()
     return jsonify({'message':f'{district.name} successfully deleted'})