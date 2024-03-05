export const oktaConfig = {
  clientId: "0oafgsq7k5l2tMiJ45d7",
  issuer: "https://dev-90641321.okta.com/oauth2/default",
  //get the devl URL location and clientId from okta
  redirectUri: "http://localhost:3000/login/callback",
  //sign-in redirect URIs
  scopes: ["openid", "email", "profile"],
  pkce: true,
  //PKCE is a security feature that helps to ensure that the authorization code that is sent back to your application is secure.
  disableHttpsCheck: true,
  //disable HTTPS check for development purposes only
};
