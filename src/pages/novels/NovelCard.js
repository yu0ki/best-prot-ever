// プロットの情報を表示（novelsにて）

import React from 'react'
import { Link } from 'react-router-dom'

const NovelCard = ({ novel }) => {

    return (
        <>
            <div className="border border-zinc-500 rounded-lg p-3 mr-3 my-3 w-2/5">
                {/* 詳細ページへのリンク：https://reffect.co.jp/react/react-router-6 */}
                <Link to={`/novels/${novel.id}`}>
                        <h2 className='font-bold'>{ novel.title }</h2>
                        <p className='text-slate-500'>
                            ステータス：
                            { novel.status === 0 && "構想中"}
                            { novel.status === 1 && "執筆中"}
                            { novel.status === 2 && "完結済み"}
                        </p>
                </Link>
            </div>
        </>
  )
}

export default NovelCard