from helloflask import app,db,bcrypt
from flask import flash,render_template,redirect,url_for,request
from helloflask.forms import LoginForm,RegistrationForm,AccountUpdateForm
from helloflask.models import User
from flask_login import login_user,logout_user,current_user,login_required

post = [
    {"Name" : "Vivek Mahajan","Branch" : "CSE","code": 721,"hex":4.56,},
    {"Name" : "Vikas Mahajan","Branch" : "CS","code": 7231,"hex":4.56,}
]
title = "personel-detail"


with app.app_context():
    # db.create_all()

    # db.session.add(User(Id='1',username='admin',email='admin@example.com',profile_pic='xyz.jpg',password='password1'))
    # db.session.add(User(Id='2',username='guest', email='guest@example.com',profile_pic='xyz.jpg',password='password2'))
    # db.session.add(Post(Id=1,title='admin title',user_id = 1))
    # db.session.add(Post(Id=2,title='guest title',user_id = 2))
    # db.session.query(User).delete()
    # User.query.delete()
    # print(User.query.all())
    print(User.query.filter_by(email='vishal@gmail.com').first().password)
    # db.drop_all()
    # db.session.commit()
    # users = User.query.all()
    # print("hello")
    # print(users[1].date_posted)
    # print(users)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html',posts=post,title=title)

@app.route("/register",methods=["POST","GET"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        print(hashed_password)
        user = User(username=form.username.data,email=form.email.data,profile_pic='xyz.jpg',password=hashed_password)
        db.session.add(user)
        db.session.commit()
        print(User.query.filter_by(username=form.username.data).first())
        flash(f'Account is Created For {form.username.data}','success')
        return redirect(url_for('home'))
    return render_template('register.html',form = form)

@app.route("/login",methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password,form.password.data):
            login_user(user,remember=form.remember.data)
            flash(f'Logged In successfully {form.email.data}','success')
            next_page = request.args.get('next')
            return redirect(url_for(next_page)) if next_page else redirect(url_for('home'))
            return redirect(url_for('home'))
            # return redirect(url_for('home'))
        else:
            flash('Not able to logged in','danger')
            return redirect(url_for('login'))
        # return redirect(url_for('home'))
    else:
        # return "$404 Not Found!"
        return render_template('login.html',form = form)
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/account',methods=['GET','POST'])
@login_required
def account():
    form = AccountUpdateForm()
    if form.validate_on_submit():
        # user = User.query.filter_by(email=current_user.email).first()
        # user.username = form.username.data
        # user.email = form.email.data
        current_user.username = form.username.data
        current_user.email  = form.email.data
        db.session.commit()
        return redirect(url_for('account'))
    else:
        return render_template('account.html',form=form)