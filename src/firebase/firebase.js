import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

 firebase.initializeApp(firebaseConfig);

 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider, database as default };

// firebase.database().ref("expenses").push({
//   description: "Clothes",
//   amount: 200,
//   createdAt: "12 March"
// });
//
// firebase.database().ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// firebase.database().ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.val());
// });

// firebase.database().ref().once("value")
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log("Error: ", e)
// });

// firebase.database().ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} in ${val.job.where}`);
// });

//   firebase.database().ref().set({
//     name: "Amy Venter",
//     age: 19,
//     job: {
//       title: "student",
//       where: "home"
//     },
//     stressLevel: 7,
//     isSingle: true,
//     location: {
//       city: "Cape Town",
//       country: "South Africa"
//     }
//   }).then(() => {
//     console.log("Data saved successfully")
//   }).catch((e) => {
//     console.log("Error: ", e)
//   })
//
// firebase.database().ref("attributes/height").set(170);
// firebase.database().ref("attributes/weight").set(67);
//
// firebase.database().ref("isSingle").remove()
// .then(() => {
//   console.log("Data removed")
// }).catch((e) => {
//   console.log("Error: ", e)
// });
//
// firebase.database().ref().update({
//   stressLevel: 9,
//   "job/where": "Joburg"
// });
