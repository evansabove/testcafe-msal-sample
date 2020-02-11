import TestUser from '../utilities/test-user'
import HomePage from '../page-model/home-page';

fixture `Login Tests`

test('should be able to log in and verify the welcome message is correct', async t => {
    await t
        .useRole(TestUser)
        .expect(HomePage.welcomeMessage.innerText).eql("Hello Test User, you are logged in!")
});

