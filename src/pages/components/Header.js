import { React } from 'react'
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import logo from "./../Best Prot.png";

const Header = () => {

  // logout関数
  const logout = () => {
    signOut(auth);
  }

  if (auth.currentUser) {
    return (
        <>
            <div className='flex justify-between m-5'>
                <div className=''>
                    <img src={logo} className='h-20' alt="Logo"></img>
                </div>
                <div className='flex'>
                    {/* ログインした人用ヘッダー */}
                    {/* ログアウトボタン */}
                    <button onClick={logout} className='rounded-full border border-zinc-300 px-4 py-2 h-4/5 my-auto'>
                        {/* アカウント画像 */}
                        {/* https://firebase.google.com/docs/auth/web/manage-users?hl=ja */}
                        <div className=''>Sign Out</div>
                    </button>
                    {/* アイコン */}
                    <img src={auth.currentUser.photoURL} alt="アカウント画像" className='h-10 w-10 rounded-full m-3 border border-zinc-300'></img>
                </div>
            </div>
            
        </>
    )
  } else {
    // ログインしてない人用ヘッダー
    return (<div className='m-5'><p>未ログイン状態です</p></div>);
  }
}

export default Header