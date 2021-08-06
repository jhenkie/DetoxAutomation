import {getUsers, getDashboardNumber} from './data';
import {loginWith, takeScreenshot} from './common';

const { userValid1, passValid1 } = getUsers();
const { number } = getDashboardNumber();

describe('User succes to login', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('When I enter valid email and password', async ()=>{
        await loginWith(userValid1, passValid1);
    });

    it('Then I should see number at dashboard page', async ()=>{
        await expect(element(by.id('numberText'))).toHaveText(number);
        takeScreenshot('Dashboard_number');
    });
});