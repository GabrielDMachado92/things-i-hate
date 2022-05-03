from flask_mysqldb import MySQL


class Config:
    def __init__(self, app):
        self.app = app
        

    def config_host(self):
        self.app.config['MYSQL_HOST'] = 'localhost'
        self.app.config['MYSQL_USER'] = 'root'
        self.app.config['MYSQL_PASSWORD'] = ''
        self.app.config['MYSQL_DB'] = 'thingsihate'
 
        mysql = MySQL(self.app)
        return mysql;


 
