import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import HeaderTop from '../HeaderTop/HeaderTop';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
            });
    }

    return (
        <div>
            <HeaderTop></HeaderTop>
            <div class="container">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <h3>Login With</h3>
                        <div>
                            <button onClick={handleSignIn}>Continue with Gmail</button>
                        </div>
                        <p>Don't have an account? <Link to="/">Create an Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;