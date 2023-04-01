import React from 'react';
// ロゴのインポート
import logo from './Best Prot.png';
// ログイン関連
// import { signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "./../firebase"
// import "firebase/app" as firebase;
// import * as firebase from './../firebase'
// import * as firebase from 'firebase'
import firebase from "firebase/compat/app";
// import "./../firebase"


function Top() {
  // var firebase = require('firebase');
  var firebaseui = require('firebaseui');
  // Initialize the FirebaseUI Widget using Firebase.
  // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // https://qiita.com/ayase/items/e3e3de209131aeeabb3d
  var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    signInSuccessUrl: './novels',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
  return (
    <>
        <div className="mt-20">
          <img src={logo} alt="Best Prot EVER" className='mx-auto'></img>
        </div>

        {/* ログイン認証 */}
        {/* 参考ページ
        Firebase を使用して認証システムを構築する場合（FirebaseUIというライブラリを使用してログイン機能を構築）:
        https://firebase.google.com/docs/auth/where-to-start?authuser=0&hl=ja */}
        
        {/* <div id="firebaseui-auth-container">
          <button className="block mx-auto">
            Googleでログイン
          </button>  
        </div> */}

        <div id="firebaseui-auth-container">
          <button className="block mx-auto">
            Googleでログイン
          </button> 
        </div>
        <div id="loader">Loading...</div>
    </>
  );
}

export default Top;
