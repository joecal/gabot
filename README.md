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

Now check out the [GAPingBot](https://github.com/joecal/gapingbot "GAPingBot") repo, then un-comment and change the the URLs in the try-catch block in the server.js file to your own heroku apps URLs, then re-deploy your GAbot.

```javascript
// server.js
try {
  if (inRange) {
    console.log('Pinging myself to stay awake.')
    https.get("https://yourGAbot.herokuapp.com/"); // <<= Replace with your GAbot heroku app URL
  } else {
    console.log("Pinging pingBot, then I'm going to sleep.")
    https.get("https://yourGAPingBot.herokuapp.com/"); // <<= Replace with your GAPingBot heroku app URL
  }
} catch (error) {
  console.log("Caught this error: ", error)
  console.log("Pinging again...")
  setTimeout(ping, 10000) // 10000 = 10 seconds
}
```

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

Now your GA profile should stay on the front page.

## Issues

- Please let me know if you find anymore issues or have any other ideas to improve the app.
