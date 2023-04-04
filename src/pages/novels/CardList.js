import React, { useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import NovelCard from './NovelCard';
import {v5 as uuid} from "uuid"; 

const CardList = ( {prots, setProts, status} ) => {
    // 小説新規投稿のタイトル
    const titleRef = useRef();

    // 新規小説作成
    const handleSubmit = () => {
        const title = titleRef.current.value;
        setProts(
            [...prots, 
            {id: uuid.generate, title: title, status: status},]
        );
        titleRef.current.value = ''; 
    };


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
            {/* TODO : 折りたたみでフォームが出てくる */}
            <div className="border border-zinc-500 rounded-lg p-3 mr-3 my-3 w-2/5">
                <p className='text-slate-500'>
                  <AiOutlinePlus className='inline'></AiOutlinePlus> 小説を追加
                </p>

                <div className='my-1'>
                    <label>タイトル</label>
                    <input type="text" ref={titleRef} />  
                    <button onClick={handleSubmit} >Submit</button>
                </div>
            </div>

            {/* 既存カード一覧 */}
            {
              prots
              .filter(props => props.status === status)
              .map( (prot) => <NovelCard prot={prot} key={prot.id}></NovelCard>)
            }
          </div>
        </div>
      </>
    );
  }

export default CardList