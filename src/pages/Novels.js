import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'

const Novels = () => {

  // 現在ログインしているユーザ
  // https://firebase.google.com/docs/auth/web/manage-users?hl=ja#get_the_currently_signed-in_user
  const [user, setUser] = useState(auth.currentUser);

   /* ↓ログインしているかどうかを判定する */
   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  
  // logout関数
  const logout = () => {
    signOut(auth);
  }

  // ログインしてない人は入れないように分岐
  if (user) {
    return (
      <>
        <div>Novels</div>
        <button onClick={logout}>Sign out</button>
      </>
    )
  } else {
    // サインアウト
    return (<Navigate to={"/"}></Navigate>);
  }
}

export default Novels