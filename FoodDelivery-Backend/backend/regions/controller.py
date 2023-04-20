#importing libraries
from flask import jsonify, request, Blueprint
from backend.regions.region import Region
from backend.db import db

#creating a blue print of the regions
all_regions = Blueprint('regions', __name__,url_prefix='/regions') 

#create the regions endpoints
@all_regions.route('/')
def regions():
    
     regions= Region.query.all()
     results = [
            {   
               "name":region.name
            }for region in regions ]
        
     return {"count":len(regions), "regions":results} 

#creating
@all_regions.route('/create', methods =['POST','GET'])
def new_region():
    name = request.json['name']
 

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    #constraints
    if Region.query.filter_by(name = name).first():
            return jsonify({'message':'this region is already stated'}),409
    

    #storing the new regions data
    #add the new foodtypes
    new_region = Region(name=name)
    db.session.add(new_region)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201



#read specifically from the table
@all_regions.route('/region/<int:id>', methods = ['GET'])
def get_region(id):
    region = Region.query.get_or_404(id)

    response = {
            "id":region.id,
            "name":region.name
        } 
    db.session.add(region)
    db.session.commit()
    return jsonify({'message':'successful ', 'region':response})


#delete from the table
@all_regions.route('/delete/<int:id>',methods = ['DELETE'])
def delete_region(id):
     region = Region.query.get_or_404(id)
     db.session.delete(region)
     db.session.commit()
     return jsonify({'message':f'{region.name} successfully deleted'})


#update the regions table
@all_regions.route('/update/<int:id>', methods = ['PATCH'])
def update_region(id):
     region = Region.query.get_or_404(id)
     name = request.json['name']
     region.name = name
     #or region.name = request.json['name'] 

     #add the updated data
     db.session.add(region)
     db.session.commit()
     return jsonify({'message':'successfully updated'})