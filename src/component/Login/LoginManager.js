// import React from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './Firebase.config'

// export const initializeFrameWork = () => {
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig)
//       }      
// }

// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     return firebase.auth().signInWithPopup(googleProvider)
//       .then(res => {
//         let { displayName, photoURL, email } = res.user

//         const signInUser = {
//           isLogedIn: true,
//           name: displayName,
//           email: email,
//           img: photoURL
//         }
//         return signInUser

//         // console.log(displayName, photoURL, email)
//       })
//       .catch(err => console.log(err))
//   }

//   export   const handleGoogleSignOut = () => {
//     return firebase.auth().signOut()
//       .then(res => {
//         const signOutUser = {
//           isLogedIn: false,
//           name: '',
//           email: '',
//           img: ''
//         }
//         console.log(res)
//         return signOutUser
//       })
//       .catch(err => console.log(err))
//   }

//   export const handleFbsignIn = () => {
//       const fbProvider = new firebase.auth.FacebookAuthProvider()
//       return firebase.auth().signInWithPopup(fbProvider)
//       .then(res => {
//           let user = res.user
//           return user
//       })
//       .catch(error => {
//           let errorMessage = error.message
//           console.log(errorMessage)
//       })
//   }

// //   export const createUserWithEmailAndPassword = () => {
// //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
// //     .then((res) => {
// //       const newUserInfo = { ...user }
// //       newUserInfo.error = ''
// //       newUserInfo.succes = true
// //       setUser(newUserInfo)
// //       updateUserName(user.name)
// //     })
// //     .catch((error) => {
// //       const newUserInfo = { ...user }
// //       newUserInfo.error = error.message
// //       newUserInfo.succes = false

// //       setUser(newUserInfo)
// //     })
// //   }

// //   export const signInUserWithEmailAndPassword = () => {
// //     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
// //     .then((res) => {
// //       const newUserInfo = { ...user }
// //       newUserInfo.error = ''
// //       newUserInfo.succes = true
// //       setUser(newUserInfo)
// //       setLogedInUser(newUserInfo)
// //       history.replace(from);
// //     })
// //     .catch((error) => {
// //       const newUserInfo = { ...user }
// //       newUserInfo.error = error.message
// //       newUserInfo.succes = false

// //       setUser(newUserInfo)
// //     })
// //   }


// //   const updateUserName = (name) => {
// //     var user = firebase.auth().currentUser;

// //     user.updateProfile({
// //       displayName: name
// //     }).then((res) => {
// //       console.log("user name update succesfully")
// //     }).catch(error => {
// //       console.log(error)
// //     });
// //   }

// // const LoginManager = () => {
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // };

// // export default LoginManager;