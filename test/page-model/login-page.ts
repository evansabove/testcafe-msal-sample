import { Selector } from "testcafe";

export default class LoginPage {
    static username = Selector("input#logonIdentifier", { timeout: 120000}); //lets the first test complete, as the system is cold.
    static usernameValidationError = Selector("p[role='alert']").withExactText("Please enter your email")
    static passwordValidationError = Selector("p[role='alert']").withExactText("Please enter your password")
    static password = Selector("input#password");
    static signIn = Selector("button#next");

    static invalidAccountValidationError = Selector("p[role='alert']").withExactText("We can't seem to find your account.")
    static signUpFeature = Selector("div.create")
}