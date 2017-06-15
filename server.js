const express      = require('express');
const app          = express();
const https        = require("https");
const phantom      = require('phantom');
const Horseman     = require('node-horseman');
const Moment       = require('moment');
const MomentRange  = require('moment-range');
const moment       = MomentRange.extendMoment(Moment);
const when         = moment();
const timeInterval = [moment('05', 'HH'), moment('22', 'HH')];
const range        = moment.range(timeInterval);
const inRange      = when.within(range);
const email        = 'JohnDoe@gmail.com'; // <<= Replace with your email
const password     = 'JohnDoePassword';   // <<= Replace with your password
const profNum      = 1234;                // <<= Replace with your profile number

const server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  let port = server.address().port;
  console.log('App listening at port:' + port);
}

function runBot() {

  console.log("Starting...");

  try {
    if (inRange) {
      console.log('Pinging myself to stay awake.')
      setInterval( () => {
          https.get("https://yourUsername-yourGAbotName.herokuapp.com/"); // <<= Replace with your GAbot heroku app URL
      }, 1800000); // every 30 minutes
    } else {
      console.log("Pinging pingBot, then I'm going to sleep.")
      https.get("https://yourUsername-yourGAPingBotName.herokuapp.com/"); // <<= Replace with your GAPingBot heroku app URL
    }
  }

  catch (error) {
    console.log("Caught this error: ", error)
  }

  let horseman  = new Horseman();

  let horse = horseman
    .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
    .viewport(1280, 720)
    .open('https://accounts.generalassemb.ly/users/sign_in')
    .status()
    .then(statusCode => {
      if (Number(statusCode) != 200) {
        throw "Error, statusCode: " + statusCode + " Couldn't load sign in page, trying again...";
      }
      else {
        console.log("Successfully loaded sign in page!")
      }
    })
    .waitForSelector('input[name="user[email]"]')
    .type('input[name="user[email]"]', email)
    .type('input[name="user[password]"]', password)
    .screenshot('1_sign_in_page.png')                     // for localhost use, comment out, or delete before deployment
    .click('[type="submit"]')
    .waitForNextPage()
    .screenshot('2_after_sign_in_page.png')               // for localhost use, comment out, or delete before deployment
    .wait(3e3)                                            // for localhost use, comment out, or delete before deployment
    .open('https://profiles.generalassemb.ly/profiles')
    .status()
    .then(statusCode => {
      if (Number(statusCode) != 200) {
        throw "Error, statusCode: " + statusCode + " Couldn't load profiles page, trying again...";
      }
      else {
        console.log("Successfully loaded profiles page!");
      }
    })
    .wait(3e3)                                            // for localhost use, comment out, or delete before deployment
    .screenshot('3_profiles_page.png')                    // for localhost use, comment out, or delete before deployment
    .wait(3e3)
    .open("https://profiles.generalassemb.ly/profiles/" + profNum + "/steps/the_lead")
    .status()
    .then(statusCode => {
      if (Number(statusCode) != 200) {
        throw "Error, statusCode: " + statusCode + " Couldn't load the_lead page, trying again...";
      }
      else {
        console.log("Successfully loaded the_lead page!");
      }
    })
    .waitForSelector('input.button')
    .screenshot('4_the_lead_page.png')                    // for localhost use, comment out, or delete before deployment
    .click('[name="commit"]')
    .waitForNextPage()
    .screenshot('5_after_the_lead_page.png')              // for localhost use, comment out, or delete before deployment
    .log("Successfully loaded all pages! Resetting...")
    .catch(error => {
      console.log("Caught this error: ", error)
      console.log("Reloading...")
      setTimeout(runBot, 10000)
      return horse.close()
    })
    .finally( () => {
      horse.close()
      setTimeout(runBot, 3600000) // 3600000 = 1 hour
      return
    });
};

runBot();
