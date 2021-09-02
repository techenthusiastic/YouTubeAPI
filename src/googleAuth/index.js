const { google } = require("googleapis");
const googleConfig = {
	clientId: process.env.gClientId,
	clientSecret: process.env.gClientSecret,
	redirect: process.env.gRedirect,
};
//
const oauth2Client = new google.auth.OAuth2(
	googleConfig.clientId,
	googleConfig.clientSecret,
	googleConfig.redirect
);
google.options({ auth: oauth2Client });
// // This scope tells google what information we want to request.
// const SCOPES = ["https://www.googleapis.com/auth/youtube.readonly"];
// // Get a url which will open the google sign-in page and request access to the scope provided
// function getConnectionUrl(auth) {
// 	return auth.generateAuthUrl({
// 		access_type: "offline",
// 		scope: SCOPES,
// 	});
// }
// console.log(getConnectionUrl(oauth2Client));
async function getTokenFromCode(code) {
	// get the auth "tokens" from the request
	const data = await oauth2Client.getToken(code);
	const tokens = data.tokens;
	return tokens;
}
async function getGoogleAccountFromCode(code) {
	// const oauth2ClientT = { oauth2Client };
	// get the auth "tokens" from the request
	const data = await oauth2Client.getToken(code);
	const tokens = data.tokens;
	// add the tokens to the google api so we have access to the account
	oauth2Client.setCredentials(tokens);
	return oauth2Client;
}
function setAuthCredentials(tokens) {
	return new Promise((resolve) => {
		oauth2Client.setCredentials(tokens);
		resolve(oauth2Client);
	});
}
const youTubeService = google.youtube("v3");
module.exports = {
	getTokenFromCode,
	getGoogleAccountFromCode,
	youTubeService,
	setAuthCredentials,
};
