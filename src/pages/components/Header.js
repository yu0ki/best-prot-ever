import React from 'react'
import { auth } from '../../firebase';

const Header = () => {
  if (auth.currentUser) {
    return (
      <>
        {/* ログインしてない人用ヘッダー */}
        {/* ログアウトボタン */}
        <button onClick={logout}>Sign out</button>
      </>
    )
  } else {
    // ログイン済みヘッダー
    return (<Navigate to={"/"}></Navigate>);
  }
}

export default Header