import React, { useEffect, useState } from 'react';
// ロゴのインポート
import logo from './Best Prot.png';
// ログイン関連
// import { signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "./../firebase"
// import firebase from "firebase/compat/app";
import { Navigate } from 'react-router-dom';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import Container from './components/Container';



function Top() {

    /* ↓state変数「user」を定義 */
    const [user, setUser] = useState("");

  // サインイン
  // https://ralacode.com/blog/post/react-firebase-authentication/
  const provider = new GoogleAuthProvider();
  const login = async () => {
    // サインイン用関数
    await signInWithRedirect(auth, provider);
    // .then(() => {setUser(auth.currentUser)});
  }

  // サインインは済んでいるか？
  // onAuthStateChangedの起爆が遅いのでここで判断
  // https://zenn.dev/rinka/articles/6ed09e0c87838b
  // useEffectの実行が終わったかどうか？ということを表していると思った方が正しそう
  const [signInCheck, setSignInCheck] = useState(false);

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (auth.currentUser) {
        // ローディング終わり！
        setUser(auth.currentUser);
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  }, [user]);

  if (!signInCheck) {
    return (
    <>
      <p>loading ... </p>
    </>);
  } else if (!user) {
    // ログインしてない
    return (
      <Container>
          <div className="mt-20">
            <img src={logo} alt="Best Prot EVER" className='mx-auto'></img>
          </div>

          {/* ログイン認証 */}
          {/* 参考ページ
          Firebase を使用して認証システムを構築する場合（FirebaseUIというライブラリを使用してログイン機能を構築）:
          https://firebase.google.com/docs/auth/where-to-start?authuser=0&hl=ja */}
          <div className='text-center'>
            <button className="rounded-full border border-zinc-300 p-3" onClick={login}>
                Googleでログイン
            </button> 
          </div>
        </Container>
    );

  } else {
    // ログインしてる
    return <Navigate to={'/novels'}></Navigate>;
  }
}

export default Top;
