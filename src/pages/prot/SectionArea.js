import React from 'react'
import SceneCard from './SceneCard'

const SectionArea = ( {section, sceneCards} ) => {

    // カード描画案2用
    // 横にカードを並べる関数
    // mapの入れ子で取り出せるように、listのlistを作成
    function alignCards(sceneCards) {
        // とりあえず全部のカードをcard_id 昇順ソート
        // https://kojimanotech.com/2020/05/03/216/
        sceneCards.sort(function(a, b) {
            let a_id = a.card_id;
            let b_id = b.card_id;
            if (a_id > b_id) {
                return 1;
            } else if (a_id < b_id) {
                return -1;
            } else {
                return 0;
            }
        })


        // 1行目だけを取り出したcardsを作成
        let main_card = sceneCards[0];
        console.log("main card");
        console.log(main_card);
        let main_timeline = [];
        main_timeline.push([main_card]);
        while (main_card.right_card_id != null) {
            main_card = sceneCards[main_card.right_card_id];
            main_timeline.push([main_card]);  
        }
        console.log("main timeline");
        console.log(main_timeline);

        // 分岐した分を収納      
        for (let i = 0; i < main_timeline.length; i++) {
            let card = main_timeline[i][0];
            console.log("card(first)");
            console.log(card);
            let sub_timeline = main_timeline[i];
            while (card.bottom_card_id != null) {
                card = sceneCards[card.bottom_card_id];
                console.log("card(second)");
                console.log(card);
                sub_timeline.push(card);
            }
        }


        return (
            <>
                <div className='flex'>
                    {main_timeline.map( (vertical) => (
                        <div>
                            {vertical.map( (card) => (
                                <div>
                                    {card.content}
                                </div>
                            ))} 
                        </div>
                    ))}

                </div>
            </>
        );
    } 


  return (
    <>
        <div className='my-5 border w-full' style={{height: section.height}}>
            {/* 章タイトル */}
            <div className='bg-zinc-100 px-3 py-1'>
                {section.title}
            </div>

            {/* カード描画エリア */}
            {/* <div className='relative'>
                {sceneCards.map( ( sceneCard ) => <SceneCard sceneCard={sceneCard}></SceneCard> )}
            </div> */}

            {/* カード描画エリア案2 */}
            {alignCards(sceneCards)}
        </div>
    </>
  )
}

export default SectionArea