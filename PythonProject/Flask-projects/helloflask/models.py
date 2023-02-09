from helloflask import db,login_manager
from datetime import datetime
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    print(user_id)
    return User.query.filter_by(email=user_id).first()



class User(db.Model,UserMixin):
    Id = db.Column(db.Integer,primary_key=True,unique=True,nullable=True)
    username = db.Column(db.String(20),unique=True,nullable=False)
    email = db.Column(db.String(120),primary_key=True,unique=True,nullable=False)
    profile_pic = db.Column(db.String(60),nullable=False)
    password = db.Column(db.String(20),nullable=False)
    posts = db.relationship('Post',backref='author',lazy=True)

    def __repr__(self) -> str:
        return f"User('{self.Id}','{self.username}','{self.email}')"
    # def is_active(self):
    #     """True, as all users are active."""
    #     return True

    def get_id(self):
        return str(self.email)

    # def is_authenticated(self):
    #     """Return True if the user is authenticated."""
    #     return self.authenticated

    # def is_anonymous(self):
    #     """False, as anonymous users aren't supported."""
    #     return False

class Post(db.Model):
    Id = db.Column(db.Integer,primary_key=True,unique=True,nullable=True)
    title = db.Column(db.String(200),nullable=False)
    date_posted = db.Column(db.DateTime,nullable=False,default=datetime.utcnow)
    user_id = db.Column(db.Integer,db.ForeignKey('user.Id'),nullable=False)

    def __repr__(self) -> str:
        return f"(Post: '{self.Id}', '{self.title}','{self.date_posted}')"
