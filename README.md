# General Assembly Profile Bot

## Purpose

- To keep a GA profile on the profile listings front page for better employer visibility.

## Dependencies

- Git
- Node.js
- Nodemon (optional)
- Google Chrome

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
node index.js
```

or

```
nodemon index.js
```

Your terminal should say:

```
Starting...
App listening at port:3000
Initializing browser
Resizing browser to fullscreen
State changed from starting to up
Navigating to https://accounts.generalassemb.ly/users/sign_in
Waiting 5 seconds to give some time to all the redirects
Taking screenshot sign_in.png
Typing pass
Typing email
Taking screenshot sign_in_typing.png
Clicking submit
Waiting 5 seconds
Taking screenshot signed_in.png
Navigating to https://profiles.generalassemb.ly/profiles/profNum/steps/the_lead
Waiting 5 seconds
Taking screenshot profile_edit.png
Clicking commit
Closing browser
Run again in one hour
```

Now you can check out the .png screenshot pictures to further verify the app is working properly.

You're ready to deploy!

## Heroku deployment via Terminal Command Line

Set headless to true in index.js

```javascript
const browser = new HeadlessChrome({
  headless: false // Set to true before deploying
})
```

Comment out, or delete all the commented lines in index.js that read:

```javascript
// for localhost use, comment out, or delete before deployment
```

These are only useful for local machine testing. No need to use them when deploying.

Now run these commands.

```
git add .
git commit -m "Pushing to heroku"
heroku login
yourEmail@email.com     
yourPassword            
heroku create yourGAbotName --buildpack heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-google-chrome.git
git push heroku master
heroku ps:scale web=1
heroku logs -t
```

Go to [wakemydyno.com](http://wakemydyno.com/ "wakemydyno.com") and submit your GAbot heroku URL which should look like this: "https://yourGAbot.herokuapp.com/wakemydyno.txt". This free service pings your app every hour to prevent it from idling.

Now your GA profile should stay on the front page.

## Issues

- Please let me know if you find anymore issues or have any other ideas to improve the app.
