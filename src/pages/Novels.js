import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Novels = () => {
  // logout関数
  const logout = () => {
    signOut(auth);
  }

  return (
    <>
      <div>Novels</div>
      <button onClick={logout}>Sign out</button>
    </>
  )
}

export default Novels