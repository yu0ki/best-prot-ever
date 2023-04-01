import React, { useEffect, useState } from 'react';
// ロゴのインポート
import logo from './Best Prot.png';
// ログイン関連
// import { signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "./../firebase"
// import firebase from "firebase/compat/app";
import { Navigate } from 'react-router-dom';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';





function Top() {

    /* ↓state変数「user」を定義 */
    const [user, setUser] = useState("");

  // サインイン
  // https://ralacode.com/blog/post/react-firebase-authentication/
  const provider = new GoogleAuthProvider();
  const login = () => {
    // サインイン用関数
    signInWithRedirect(auth, provider);
  }

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  return (
    <div id='top'>
      { user ? (<Navigate to={'/novels'}></Navigate>) : (
        <>
          <div className="mt-20">
            <img src={logo} alt="Best Prot EVER" className='mx-auto'></img>
          </div>

          {/* ログイン認証 */}
          {/* 参考ページ
          Firebase を使用して認証システムを構築する場合（FirebaseUIというライブラリを使用してログイン機能を構築）:
          https://firebase.google.com/docs/auth/where-to-start?authuser=0&hl=ja */}
          <div className='text-center'>
            <button className="rounded-full border p-3" onClick={login}>
                Googleでログイン
            </button> 
          </div>
        </>
        )
      }
        
    </div>
  );
}

export default Top;
