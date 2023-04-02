import React from 'react'
import Header from './Header'

// 全ページ共通コンポーネント
// https://qiita.com/yousuke_asami/items/bd17e7b0f5667f9c4503
const Container = (props) => {
  return (
    <div className='font-serif'>
        <Header></Header>
        <div className='p-5'>
            { props.children }
        </div>
    </div>
  )
}

export default Container