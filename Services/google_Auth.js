// // npm install googleapis@105 @google-cloud/local-auth@2.1.0
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile'];

const CREDENTIALS_PATH = "C:\\Users\\anura\\FinalProject\\credentials.json";

async function authorize() {
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH
  });
  return client;
}


const ser = google.people('v1');
async function getdata(auth)
{
  google.options({auth});

  const res = await ser.people.get({
    resourceName: 'people/me',
    personFields: 'emailAddresses,names',
  });
  data={mail:res.data.emailAddresses.at(0).value,name:res.data.names.at(0).displayName}
  return data
}

module.exports =authorize().then(getdata).catch(console.error)
































// import firebase from "firebase/app";
// import "firebase/auth";
// const firebase=require("firebase/app")

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   "type": "service_account",
//   "project_id": "work-it-26b2f",
//   "private_key_id": "012c44751c64479537db1670b382b12801b05df3",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDj1Ww5NRihvFzX\ndOxcCDxYLDwfGsAxm0tanSgdIEDbQlev9kHlUlEoOJSOJN8RmuLNFwZC/+qsY3FG\n6x7tzdrHKVyJZR3APy64beBqCmXq0jfNG9YUjeI5eOH0caCObIJ5JoFkS0apDjzw\naafDevtnqN8ygM77JhGwmVZm9nlXunGAH98UTvZobJWCW4igEfo+UstULnE2F5QU\n5qRSLc6KJvHIZqQzFOvOHRDsvFaL8b+Y0G4IKpB+s1uwHxAhiH68K32XQETfjodQ\nP7AqL0tuSPk/mEA1p1fYTxwvC5eRmjkxDxH96iQMA2vz+FW2lzCna4sX/XUxsIVk\nOesO5IiXAgMBAAECggEAGBU1wOBPb7049R9rYpkOQ+W9Hy6VNUkskHH/TQDdSi/7\nk+KMeaCXapB8h3/3QmWkZrhx1YA2vq0uSqhM1ydE4nuJSA6zs+AZ4K3gpGTf/A/n\njRtNqFONH7Ua8VtXdOacbhD3aXIZkIIsR99rN9sWmxD7MtvxxRNzmD7FJtIT5oVg\nKUMR/GGnEoa2aADV4LC01IAYdwyD8lu1SeoVZaho4A+fsB7zcFfO2Vl1iursxWgT\nO2NyrQTtF3095xpwXvFwUsbW8JIhAqaO03PB/3QdTjrsiGXmxCDT2Ho1rCzJBvL9\n+QDxJ+pKieYNbamGa+LoEz0VqtBrbROX+Xfr6zT+gQKBgQD4YWtr2CEF2iXw/BCF\nVBaai15jJnW6G7horLLLpQZPOudBICd1L9+NUF1pCNFYtX9yGIz3iJ6degRDBOGv\n0zJXj8fkzfcFpllEWChhJ9UIF9cBIsct9+EiAWq7XoAx5FcPu5B0rm5nwx+fpW99\nMCETcGGNu0izP0Pyeo/IHQxEgQKBgQDq0qUH9XsjfY/oJIpR3EQw9n2/lp3eQrhQ\n6TbYvcpyC0pEqwgepkJ2VtyKHBuifkLUeju8saJgWa9I/gEkULVpOJPxf4EskdvL\n4kj1Wb67WiHTCR9e/nfjDQJql+B6B6bLFAM8svdGZNegyQoSSbJVFZbvthhSXS8Z\nRpuxDBXhFwKBgFPXPpV2rR72lhwUWddHnSGprcC2OMMLnGHo+al4GPshnPIE0ozi\nDgn7eKx9x3y0N0LiOqNLwI7ToyCkQzJAjhu0cvsu8xU7I6LIR0kUUvqaYX8GqElC\nBQKfi9GXgppUw3aSD57zSl1IJiKTi2CsoF2Zb7SR5WZsEpmE+YfJFl0BAoGAOvhP\nLWJ+W/lKTFfwzIHuNgWQqq5eUtSaiOcoOOHglycyrW/uCBRkmGdT1vMcFYBzs/xG\nSCqrxlp/ZGs1SjNie1wT+w+0FsdCVT8sZ0D0XwRRfjfKQwbQgJphwvcFDmAhiNor\nvfCLnIfyhpQ2DUWonSlg0C4AiZ6RF13d92Y7kF0CgYA69IxSeuTA/mmGDe+/5Qn/\n2/Iy854xrxPd6F68AmoR4lRiOAIB/bCexmAMs5iF0xcpe/1zcThXGrdGVc+ya/mu\nNZG85l4DxbjCKbOJej2RhxNh453D6yXmDv1rKuCu9PbKJGbjkN8i9MHUdpdjajPZ\n12v7LL2cWZu5Fx3W4tH4DA==\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-c4ady@work-it-26b2f.iam.gserviceaccount.com",
//   "client_id": "104770514503434745217",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c4ady%40work-it-26b2f.iam.gserviceaccount.com"
// }


// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth(firebaseConfig);
// var provider = new firebase.auth.GoogleAuthProvider()
// provider.addScope('https://www.googleapis.com/auth/userinfo.email');
// firebase.auth().useDeviceLanguage();
// firebase.auth().signInWithRedirect(provider);
// firebase.auth()
//   .getRedirectResult()
//   .then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
