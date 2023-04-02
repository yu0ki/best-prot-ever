import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Navigate } from 'react-router-dom'
import Container from '../components/Container'
import page_title from "./Prot.png"
import CardList from './CardList'

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

  // ダミーのプロット情報を初期化
  const [prots, setProts] = useState(
    [{id:1, title:"ヘンゼルとグレーテル", status: 1},
    {id:2, title:"不思議の国のアリス", status: 0},
    {id:3, title:"赤ずきん", status: 2},
    {id:4, title:"しらゆきひめ", status: 2}]
  );

  // プロット参加者情報
  const [authors, setAuthors] = useState(
    [{prot_id:1, author_id: auth.currentUser},
      {prot_id:2, author_id: auth.currentUser}]
  );


  // ログインしてない人は入れないように分岐
  if (user) {
    return (
      <Container>
        <div className='mx-5'>
          <div className='mb-5'>
            <img src={page_title} alt="プロット一覧" className='mx-auto h-20'></img>
          </div>

          <div className='flex w-screen'>
            <div className='w-1/3'>
              <CardList prots={prots} setProts={setProts} status={0}></CardList>
            </div>

            <div className='w-1/3'>
            <CardList prots={prots} setProts={setProts} status={1}></CardList>
            </div>

            <div className='w-1/3'>
            <CardList prots={prots} setProts={setProts} status={2}></CardList>
            </div>
          </div>
        </div>
      </Container>
    )
  } else {
    // サインアウト済みの場合はトップページへ
    return (<Navigate to={"/"}></Navigate>);
  }
}

export default Novels