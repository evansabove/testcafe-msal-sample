import LoginUtility from '../utilities/login-utility'
import Settings from '../settings';

fixture `Login Tests`
    .page(Settings.appUrl);

test('should be able to log in, see the home page, and then log out', async t => {
    await LoginUtility.login(t)
        
});

