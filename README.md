# General Assembly Profile Bot

## Purpose

- To keep a GA profile on the profile listings front page for better employer visibility.

## Local Installation

```
git clone git@github.com:joecal/gabot.git
cd gabot
npm install
```

Before running the app, make sure you change the email, password and profNum variables in the server.js file.

```javascript
// server.js
var email     = 'JohnDoe@gmail.com'; // <<= Replace with your email
var password  = 'JohnDoePassword';   // <<= Replace with your password
var profNum   = 1234;                // <<= Replace with your profile number
```

Now you should be ready to test the app. Run the next command.

```
nodemon server.js
```

Your terminal should say:

```
Starting...
App listening at port:3000
Successfully loaded sign in page!
Successfully loaded profiles page!
Successfully loaded the_lead page!
Successfully loaded all pages! Resetting...
```

Now you can check out the .png screenshot pictures to further verify the app is working properly.

You're ready to deploy!

## Heroku deployment

Comment out, or delete all the commented lines in server.js that read:

```javascript
// for localhost use, comment out, or delete before deployment
```

These line of code are only useful for local machine testing. No need to use them when deploying.

Now run these commands.

```
git add .
git commit -m "Pushing to heroku"
heroku login
JohnDoe@gmail.com          <<= Your heroku email
JohnDoePassword            <<= Your heroku password
heroku create appNameHere --buildpack heroku/nodejs
git push heroku master
heroku logs -t
```

If everything in the heroku logs looks ok then go to https://kaffeine.herokuapp.com/ then submit your apps name and set a time you want the app to idle/sleep. This free service pings your app every 30 minutes to prevent it from idling.

Now your GA profile should stay on the front page.

## Issues

- Could use more error handling and possibly send a notification if the app goes down.
- Maybe a better pinging option to prevent idling.
- Please let me know if you find anymore issues or have any other ideas to improve the app.
