import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Navigate } from 'react-router-dom'
import Container from '../components/Container'
import ProtCard from '../components/ProtCard'
import page_title from "./Prot.png"
import { AiOutlinePlus } from "react-icons/ai"

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

  // カードのリスト（部分テンプレート：1行分）
  // フィルター前のprotsと, statusを渡す
  const CardList = ( prots, status ) => {
    return (
      <>
        <div className=''>
          <h1 className='font-bold text-3xl my-3'>
            { status === 0 && "構想中" }
            { status === 1 && "執筆中" }
            { status === 2 && "執筆済み" }
          </h1>

          <div className='flex flex-wrap'>
            {/* TODO : 新規追加用カード */}
            <div className="border border-zinc-500 rounded-lg p-3 mr-3 my-3 w-2/5">
                <p className='text-slate-500'>
                  <AiOutlinePlus className='inline'></AiOutlinePlus> 小説を追加 
                </p>
            </div>

            {/* 既存カード一覧 */}
            {
              prots
              .filter(props => props.status === status)
              .map( (prot) => <ProtCard prot={prot} key={prot.id}></ProtCard>)
            }
          </div>
        </div>
      </>
    );
  };

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
              {CardList(prots, 0)}
            </div>

            <div className='w-1/3'>
              {CardList(prots, 1)}
            </div>

            <div className='w-1/3'>
              {CardList(prots, 2)}
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