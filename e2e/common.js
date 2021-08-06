const {execSync} = require('child_process');

const OPTIONS = {
  timeout: 10000,
  killSignal: 'SIGKILL'
};

const takeScreenshot = (name) => {
  const filename = `${name}.png`;

  if(device.getPlatform() == 'ios') {
    execSync(
      `xcrun simctl io booted screenshot $(pwd)/documents/screenshots/${filename}`,
      OPTIONS,
    );
  }
}

const loginWith = async (username, password) => {
  await element(by.id('emailInput')).typeText(username);
  await element(by.id('passwordInput')).typeText(password);

  await element(by.id('loginButton')).tap();
}


  export {loginWith, takeScreenshot};