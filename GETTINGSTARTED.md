we must update it to our project.
just stealed from other repository

Install important stuff:
From within the root directory:

1. npm install in /



To get server properly connected:

In the root directory:
1. heroku login
2. heroku create <servername>
3. heroku git:remote -a <servername>
4. git push heroku master
5. wait until done... your server will be hosted on something along the lines of:
    https://<servername>.herokuapp.com          or in our case
    https://mealdotnext4.herokuapp.com

6. This url will be used to do request from client/mobile side.



To get the mongoDB wired up, if you don't want go google (hosted using mlab):

1. Go to https://mlab.com/
2. Create an account
3. Click create new MongoDB Deployment
4. Single-node sandbox (free 0.5GB one), add relevant info, create
5. Click on your new database
6. Go to users tab and add database user. Create user/pass
7. Look for the url under

    To connect using a driver via the standard MongoDB URI (what's this?):

    E.g mongodb://<dbuser>:<dbpassword>@ds031167.mlab.com:31167/mealdotnext

1. Go to /server/config/connection.js
2. Fill in relevant information to the variables (mongoUser, mongoPassword, mongoURI)
3. Done.



Get access to Edamam API

1. https://developer.edamam.com/
2. Create free account
3. Go to /server/config/config.js     and put in your stuff.




Endpoints

1. Read and understand what endpoints there are and what they do by going to
   api_documentation.md
2. Note that you will need to be authenticated to access most of them.
   Or you can go to /server/config/routes.js and remove isAuthenticated if you
   just want to test stuff out. Do this also for /server/config/routers/users.js


Getting started on react native

0. Go to mobile/app/       Addmeal.js and MealList.js and change
1. https://github.com/exponentjs/xde
2. Install for whichever environment
3. Run program
4. Project -> open project-> mobile folder of this directory
