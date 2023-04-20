import os

# base class
class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False


    @staticmethod
    def init_app(app):
        pass


# sub classes of the base class
class DevelopmentConfig(Config):
    DEBUG = True
    JWT_SECRET_KEY = 'jwt'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost/food_delivery_system' #we have the databse driver, the username, the location, and the name of the database

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("TEST_DATABASE_URI")

# configuration object
config = {
    'development' : DevelopmentConfig,
    'testing' : TestingConfig,
    'default' : DevelopmentConfig
}
