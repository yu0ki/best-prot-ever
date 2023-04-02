import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'
import Container from './components/Container'

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

  // ログインしてない人は入れないように分岐
  if (user) {
    return (
      <Container>
          <h1>最近のプロット</h1>

          <h1>執筆中</h1>

          <h1>構想中</h1>
      </Container>
    )
  } else {
    // サインアウト済みの場合はトップページへ
    return (<Navigate to={"/"}></Navigate>);
  }
}

export default Novels