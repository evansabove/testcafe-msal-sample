import Vue from 'vue'
import App from './App.vue'
import * as Msal from "msal";

Vue.config.productionTip = false

console.log("App is loading")

const msalConfig = {
  auth: {
      clientId: 'a1ed63c8-b3eb-4386-bf56-46a15d7694cc',
      validateAuthority: false,
      authority: 'https://andrewjamesevans.b2clogin.com/tfp/2f9626a3-9b17-40c8-839b-402afff47f01/B2C_1_SignIn',
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

const msalInstance = new Msal.UserAgentApplication(msalConfig);

msalInstance.handleRedirectCallback((error, response) => {
  console.log(error);
  console.log(response);
});

let isLoggedIn = msalInstance.getAccount() != null;

if(!isLoggedIn) {
  console.log("You aren't logged in.")
  msalInstance.loginRedirect();
}
else {
  console.log("You're logged in!")
  new Vue({
    render: h => h(App, { props: { username: msalInstance.getAccount().name }}),
  }).$mount('#app')
}