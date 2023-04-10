import React, { useEffect } from 'react'

const SceneCard = ( {sceneCard, sceneCards, setSceneCards} ) => {
    // カード追加（右）
    const addCardRight = () => {

        const new_scene_cards = [
            ...sceneCards.map((card, index) => 
            (index === sceneCards.length - 1 ? {novel_id: card.novel_id, section_id: card.section_id, card_id: card.card_id, content: card.content, right_card_id: sceneCards.length, bottom_card_id: card.bottom_card_id} : card)),
            {novel_id: sceneCard.novel_id, section_id: sceneCard.section_id, card_id: sceneCards.length, content: "", right_card_id: null, bottom_card_id: null}
        ];

        setSceneCards(new_scene_cards);
    }


    // カード追加（下）
    const addCardBottom = () => {
        sceneCard.bottom_card_id = sceneCards.length;
        setSceneCards(
            [...sceneCards,
            {novel_id: sceneCard.novel_id, section_id: sceneCard.section_id, card_id: sceneCards.length, content: "", right_card_id: null, bottom_card_id: null}]
        );
    }

    // カード削除

    return (
        <>
            <div className='flex'>
                <div>
                    <div className='border border-zinc-500 rounded-lg p-3 mr-3 my-3'>
                        {sceneCard.content}
                    </div>

                    <button onClick={addCardBottom}>
                        {/* 三角形 */}
                        {/* https://stackoverflow.com/questions/67133460/how-to-make-a-triangle-shape-with-tailwind */}
                        <div className="w-16 overflow-hidden inline-block">
                            <div className="bg-zinc-100 hover:bg-zinc-300 hover:shadow-lg mx-auto h-6 w-6 -rotate-45 transform origin-top-left"></div>
                        </div>
                    </button>
                </div>

                <button onClick={addCardRight} className="w-6 overflow-hidden inline-block">
                    {/* <div className="w-6  my-5 overflow-hidden inline-block"> */}
                        <div className=" h-6 bg-zinc-100 hover:bg-zinc-300 hover:shadow-lg rotate-45 transform origin-top-left"></div>
                    {/* </div> */}
                    <div className='h-1/3'></div>
                </button>

            </div>
        </>
    )
}

export default SceneCard