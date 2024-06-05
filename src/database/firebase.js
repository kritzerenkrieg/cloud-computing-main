import firebase from 'firebase';
var firebaseConfig = {
    apiKey:process.env.APIKEY,
    authDomain:process.env.AUTHDOMAIN,
    projectId:process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

var FbApp = firebase.initializeApp(firebaseConfig);
module.exports.FBApp = FbApp.database();
