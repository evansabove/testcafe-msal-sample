import logonPage from '../page-model/login-page';
import Settings from '../settings'
import { Role } from 'testcafe'

export async function login(t: any) {
    await t
        .typeText(logonPage.username, Settings.username)
        .typeText(logonPage.password, Settings.password)
        .click(logonPage.signIn)
}

const TestUser = Role(Settings.appUrl, login, { preserveUrl: true });

export default TestUser