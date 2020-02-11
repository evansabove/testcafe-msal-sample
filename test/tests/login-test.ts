import TestUser from '../utilities/test-user'
import Settings from '../settings';
import HomePage from '../page-model/home-page';

fixture `Login Tests`
    .page(Settings.appUrl);

test('should be able to log in, see the home page, and then log out', async t => {
    await t
        .useRole(TestUser)
        .expect(HomePage.welcomeMessage.innerText).eql("Hello Test User, you are logged in!")
});

