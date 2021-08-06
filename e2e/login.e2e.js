import {getUsers} from './data';
import {loginWith, takeScreenshot} from './common'

const { userInvalid, passInvalid, userValid1, passValid1 } = getUsers();

describe('User failed to login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('When I enter invalid email and password', async ()=>{
    await loginWith(userInvalid, passInvalid);
  });

  it('Then I should see error message', async ()=>{
    await expect(element(by.text('Invalid email or password'))).toBeVisible();
    takeScreenshot('Login_invalid');
  });
});


describe('User success to login', () => {
    beforeAll(async () => {
    await device.reloadReactNative();
  });

  it('When I enter valid email and password', async ()=>{
    await loginWith(userValid1, passValid1);
  });

  it('Then I should see dashboard page', async ()=>{
    await expect(element(by.text('Dashboard'))).toBeVisible();
    takeScreenshot('Login_success');
  });
});