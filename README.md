# General Assembly Profile Bot

## Purpose

- To keep a GA profile on the profile listings front page for better employer visibility.

## Dependencies

- Git
- Node.js version 6 (doesn't seem to work properly on version 8)
- Nodemon (optional)

## Local Installation via Terminal Command Line

```
git clone git@github.com:joecal/gabot.git
cd gabot
npm install
```

Before running the app, make sure you change the email, password and profNum variables in the server.js file.

```javascript
// server.js
const email     = 'JohnDoe@gmail.com'; // <<= Replace with your email
const password  = 'JohnDoePassword';   // <<= Replace with your password
const profNum   = 1234;                // <<= Replace with your profile number
```

Now you should be ready to test the app. Run the next command.

```
node server.js
```

or

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

## Heroku deployment via Terminal Command Line

Comment out, or delete all the commented lines in server.js that read:

```javascript
// for localhost use, comment out, or delete before deployment
```

These lines of code are only useful for local machine testing. No need to use them when deploying.

Now run these commands.

```
git add .
git commit -m "Pushing to heroku"
heroku login
yourEmail@email.com     
yourPassword            
heroku create yourGAbotName --buildpack heroku/nodejs
git push heroku master
heroku ps:scale web=1
heroku logs -t
```

Heroku didn't seem to like the use of timers for pinging in the previous version of this, so we'll use a free pinging service instead. Go to [wakemydyno.com](http://wakemydyno.com/ "wakemydyno.com") and submit your GAbot heroku URL which should look like this: "https://yourGAbot.herokuapp.com/wakemydyno.txt". This free service pings your app every hour to prevent it from idling.

Now your GA profile should stay on the front page.

## Issues

- Please let me know if you find anymore issues or have any other ideas to improve the app.
