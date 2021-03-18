import { useContext, useState } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleFacebook, handleGoogleSignIn, handleGoogleSignOut, initializeLogInFramework, signInUserWithEmailAndPassword } from './LoginManager';

// firebase.initializeApp(firebaseConfig);



function Login() {

  const [user, setUser] = useState({
    isLogedIn: false,
    name: '',
    email: '',
    password: '',
    img: '',
    error: '',
    succes: false
  })

  const [newUser, setNewUser] = useState(false)

  initializeLogInFramework()

  const [logedInUser, setLogedInUser] = useContext(userContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setUser(res)
        setLogedInUser(res)
        history.replace(from);
      })
  }

  const googleSignOut = () => {
    handleGoogleSignOut()
      .then(res => {
        setUser(res)
        setLogedInUser(res)
        history.replace(from);
      })
  }

  const facebookSignIn = () => {
    handleFacebook()
      .then(res => {
        setUser(res)
        setLogedInUser(res)
        history.replace(from);
      })
  }

  // form
  const handleChange = (e) => {
    let isFormValid = true
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6
      const reg = /\d{1}/.test(e.target.value);
      isFormValid = reg && isPasswordValid
    }

    if (isFormValid) {
      let newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }


  const shubmitHandler = (e) => {

    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          setUser(res)
          setLogedInUser(res)
          history.replace(from);
        })
    }

    if (!newUser && user.email && user.password) {
      signInUserWithEmailAndPassword(user.email, user.password).then(res => {
         
          setUser(res)
          setLogedInUser(res)
          history.replace(from);
        })
    }

    
    e.preventDefault()
  }


  return (
    <div style={{ textAlign: "center" }}>
      {
        user.isLogedIn ? <button onClick={googleSignOut}>sign out</button> :
          <button onClick={googleSignIn}>sign in</button>
      }
      <br />
      <button onClick={facebookSignIn}>facebook signIn</button>
      {
        user.isLogedIn && <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <img src={user.img} alt="" />
        </div>
      }

      <h4>Form Authentication</h4>
      <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
      <label htmlFor="newUser">check for new user</label>
      <form onSubmit={shubmitHandler}>
        {newUser && <input type="text" name="name" onBlur={handleChange} placeholder='your name' />} <br />
        <input type="text" required name="email" placeholder="enter your email" onBlur={handleChange} /> <br />
        <input type="password" required name="password" placeholder="enter your password" onBlur={handleChange} /> <br />
        <input type="submit" value={newUser ? "sign up" : "sign in"} />
        
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {
        user.succes && <p style={{ color: "green" }}>Account {newUser ? "created" : "loged In"} succesfully</p>
      }

    </div>

  );
}

export default Login;