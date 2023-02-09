from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,SubmitField,BooleanField,EmailField
from wtforms.validators import DataRequired,Length,Email,EqualTo,ValidationError
from helloflask.models import User
from flask_login import current_user

class RegistrationForm(FlaskForm):
    username = StringField('UserName',validators = [DataRequired(),Length(min=2,max=20)])
    email = EmailField('Email',validators = [DataRequired(),Email()])
    password = PasswordField('password',validators = [DataRequired()])
    confirm_password = PasswordField('confirm_password',validators=[DataRequired(),EqualTo('password')])
    submit = SubmitField('Sign Up')

    def validate_username(self,username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('username already exits!')
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('email already exits!')

class LoginForm(FlaskForm):
    # username = StringField('UserName',validators = [DataRequired(),Length(min=2,max=20)])
    email = StringField('Email',validators = [DataRequired(),Email()])
    password = PasswordField('password',validators = [DataRequired()])
    # confirm_password = PasswordField('confirm_password',validators=[DataRequired(),EqualTo('password')])
    remember = BooleanField("Remember Me!")
    submit = SubmitField('Sign In',validators=[])


class AccountUpdateForm(FlaskForm):
    username = StringField('UserName',validators = [DataRequired(),Length(min=2,max=20)])
    email = EmailField('Email',validators = [DataRequired(),Email()])
    # password = PasswordField('password',validators = [DataRequired()])
    # confirm_password = PasswordField('confirm_password',validators=[DataRequired(),EqualTo('password')])
    submit = SubmitField('Update')

    def validate_username(self,username):
        if username.data!=current_user.username:
            user = User.query.filter_by(username=username.data).first()
            if user:
                raise ValidationError('username already exits Please use Other!')
    def validate_email(self, email):
        if email.data!=current_user.email:
            user = User.query.filter_by(email=email.data).first()
            if user:
                raise ValidationError('email already exits Please Use Other!')