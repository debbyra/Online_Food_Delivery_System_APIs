from flask import Flask
from config import config
from backend.db import db
from flask_cors import CORS


def create_app(config_name): #Application Factory Funciton
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.from_pyfile("../config.py")


    db.init_app(app)
    CORS(app)


    #import the blueprints
    from backend.users.controllers import all_users
    from backend.addresses.controller import all_addresses
    from backend.discounts.controller import all_discounts
    from backend.districts.controller import all_districts
    from backend.fooditems.controller import all_fooditems
    from backend.subcategories.controller import all_subcategories
    from backend.category.controller import all_categories
    from backend.orders.controller import all_orders
    from backend.regions.controller import all_regions
    from backend.reviews.controller import all_reviews
    from backend.auth.controller import auth


    #registering blue prints
    app.register_blueprint(all_users)
    app.register_blueprint(all_addresses)
    app.register_blueprint(all_discounts)
    app.register_blueprint(all_districts)
    app.register_blueprint(all_regions)
    app.register_blueprint(all_reviews)
    app.register_blueprint(all_orders)
    app.register_blueprint(all_fooditems)
    app.register_blueprint(all_subcategories)
    app.register_blueprint(all_categories)
    app.register_blueprint(auth)


    return app
