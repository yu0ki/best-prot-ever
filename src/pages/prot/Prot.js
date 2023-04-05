import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Container from '../components/Container';
import { auth } from '../../firebase';
import SectionArea from './SectionArea';
import { onAuthStateChanged } from 'firebase/auth';

const Prot = () => {
    // どの小説のプロットページ？
    // https://forestbook-freelance.com/2021/03/12/react-%E3%81%A7url-%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%82%92%E3%82%81%E3%81%A3%E3%81%A1%E3%82%83%E7%B0%A1%E5%8D%98%E3%81%AB%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/
    const novel_id = useParams();

    // 初期データ
    // 章
    const [sections, setSections] = useState(
        [{novel_id: novel_id, section_id: 1, title: "1章", height: 120},
        {novel_id: novel_id, section_id: 2, title: "2章", height: 120}
    ]
    );

    // 場面カード
    // const [sceneCards, setSceneCards] = useState([
    //     {novel_id: novel_id, section_id: 1, content: "場面1-1", position_x: 20, position_y: 20},
    //     {novel_id: novel_id, section_id: 1, content: "場面1-2", position_x: 20+100, position_y: 20},
    //     {novel_id: novel_id, section_id: 2, content: "場面2-1", position_x: 20, position_y: 20}]
    // );

    // 場面カード案2
    // LinkedList風に実装
    // Headは必ず左上のカード
     const [sceneCards, setSceneCards] = useState([
        {novel_id: novel_id, section_id: 1, card_id: 0, content: "場面1-1", right_card_id: 1, bottom_card_id: null},
        {novel_id: novel_id, section_id: 1, card_id: 1, content: "場面1-2", right_card_id: 3, bottom_card_id: 2},
        {novel_id: novel_id, section_id: 1, card_id: 2, content: "場面1-2'", right_card_id: 4, bottom_card_id: null},
        {novel_id: novel_id, section_id: 1, card_id: 3, content: "場面1-3", right_card_id: null, bottom_card_id: null},
        {novel_id: novel_id, section_id: 2, card_id: 4, content: "場面2-1", right_card_id: null, bottom_card_id: null}
    ]
    );

    // const [headCard, setHeadCard] = useState([
    //     {novel_id: novel_id, section_id: 1, head_card_id: 0},
    //     {novel_id: novel_id, section_id: 2, head_card_id: 4}
    // ]);
  
    // ログイン弾き
    // useEffectの実行が終わったかどうか？ということを表している
    const [signInCheck, setSignInCheck] = useState(false);

    /* ↓ログインしているかどうかを判定する */
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            // ローディング終わり！
            // setUser(auth.currentUser);
            setSignInCheck(true);
        } else {
            setSignInCheck(true);
        }
        });
    }, []);

    if (!signInCheck) {
        <p>Loading at prot</p>
    } else if (auth.currentUser) {
        return (
            <Container>
                <div className='mx-5 h-screen w-screen'>
                    {sections.map( section => 
                    <SectionArea key={"section" + section.section_id} section={section} sceneCards={sceneCards.filter( (card) => card.section_id === section.section_id )}>
                    </SectionArea> )}
                </div>
            </Container>
        );
    } else {
        return (<Navigate to={"/"}></Navigate>);
    }


}

export default Prot