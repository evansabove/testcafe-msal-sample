import logonPage from '../page-model/login-page';
import Settings from '../settings'
import HomePage from '../page-model/home-page'

export default class LoginUtility {
    public static async login(t: TestController) {
        await t
            .typeText(logonPage.username, Settings.username)
            .typeText(logonPage.password, Settings.password)
            .click(logonPage.signIn)
            .expect(HomePage.welcomeMessage.innerText).eql("Hello Test User, you are logged in!")
    }
}