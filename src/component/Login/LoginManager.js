import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config'

export const initializeLogInFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
      }      
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        let { displayName, photoURL, email } = res.user

        const signInUser = {
          isLogedIn: true,
          name: displayName,
          email: email,
          img: photoURL
        }
        return signInUser

        // console.log(displayName, photoURL, email)
      })
      .catch(err => console.log(err))
  }

export const handleGoogleSignOut = () => {
    return firebase.auth().signOut()
      .then(res => {
        const signOutUser = {
          isLogedIn: false,
          name: '',
          email: '',
          img: ''
        }
        console.log(res)
        return signOutUser
      })
      .catch(err => console.log(err))
  }

  
 export const handleFacebook = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
      .then(res => {
        /** @type {firebase.auth.OAuthCredential} */
        return res.user
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user
      newUserInfo.error = ''
      newUserInfo.succes = true
      updateUserName(name)
      return newUserInfo
    })
    .catch((error) => {
      const newUserInfo = {}
      newUserInfo.error = error.message
      newUserInfo.succes = false

      return newUserInfo
    })
  }

  export const signInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user
      newUserInfo.error = ''
      newUserInfo.succes = true
      return newUserInfo
    })
    .catch((error) => {
      const newUserInfo = {}
      newUserInfo.error = error.message
      newUserInfo.succes = false

      return newUserInfo
    })
  }


  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then((res) => {
      console.log("user name update succesfully")
    }).catch(error => {
      console.log(error)
    });
  }
