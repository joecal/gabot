const HeadlessChrome = require('simple-headless-chrome')
const express        = require('express');
const app            = express();
const path           = require('path');
const email          = 'JohnDoe@gmail.com'; // <<= Replace with your email
const password       = 'JohnDoePassword';   // <<= Replace with your password
const profNum        = 1234;                // <<= Replace with your profile number

const browser = new HeadlessChrome({
  headless: false // Set to true before deploying
})

const server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  const port = server.address().port;
  console.log('App listening at port:' + port);
}

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, '/', 'wakemydyno.txt'));
});

async function runBot() {
  try {
    await browser.init()
    console.log('Initializing browser')

    await browser.resizeFullScreen()
    console.log('Resizing browser to fullscreen')

    await browser.goTo('https://accounts.generalassemb.ly/users/sign_in')
    console.log('Navigating to https://accounts.generalassemb.ly/users/sign_in')

    await browser.debugLog('Waiting 5 seconds to give some time to all the redirects')
    console.log('Waiting 5 seconds to give some time to all the redirects')

    await browser.saveScreenshot('./sign_in')     // for localhost use, comment out, or delete before deployment
    console.log('Taking screenshot sign_in.png')  // for localhost use, comment out, or delete before deployment

    await browser.type('input[name="user[email]"]', email)
    console.log('Typing email')

    await browser.type('input[name="user[password]"]', password)
    console.log('Typing pass')

    await browser.saveScreenshot('./sign_in_typing')    // for localhost use, comment out, or delete before deployment
    console.log('Taking screenshot sign_in_typing.png') // for localhost use, comment out, or delete before deployment

    await browser.click('[type="submit"]')
    console.log('Clicking submit')

    await browser.wait(5000)
    console.log('Waiting 5 seconds')

    await browser.saveScreenshot('./signed_in')     // for localhost use, comment out, or delete before deployment
    console.log('Taking screenshot signed_in.png')  // for localhost use, comment out, or delete before deployment

    await browser.goTo("https://profiles.generalassemb.ly/profiles/" + profNum + "/steps/the_lead")
    console.log('Navigating to https://profiles.generalassemb.ly/profiles/' + profNum + "/steps/the_lead")

    await browser.wait(5000)
    console.log('Waiting 5 seconds')

    await browser.saveScreenshot('./profile_edit')    // for localhost use, comment out, or delete before deployment
    console.log('Taking screenshot profile_edit.png') // for localhost use, comment out, or delete before deployment

    await browser.click('[name="commit"]')
    console.log('Clicking commit')

    await browser.close()
    console.log('Closing browser')

    await setTimeout(runBot, 3600000) // 3600000 = 1 hour
    console.log('Run again in one hour')
  }

  catch(error) {
    console.log("Caught this error: ", error)
    browser.close()
    console.log('Closing browser')
    console.log("Reloading...")
    setTimeout(runBot, 10000) // 10000 = 10 seconds
  }
 }
 runBot()
 console.log('Starting...')
