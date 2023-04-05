import React from 'react'

const SceneCard = ( {sceneCard, sceneCards, setSceneCards} ) => {
    // カード追加（右）
    const addCardRight = () => {
        sceneCard.right_card_id = sceneCards.length;
        setSceneCards(
            [...sceneCards,
            {novel_id: sceneCard.novel_id, section_id: sceneCard.section_id, card_id: sceneCards.length, content: "", right_card_id: null, bottom_card_id: null}]
        );
    }

    // カード追加（下）
    const addCardBottom = () => {
        sceneCard.bottom_card_id = sceneCards.length;
        setSceneCards(
            [...sceneCards,
            {novel_id: sceneCard.novel_id, section_id: sceneCard.section_id, card_id: sceneCards.length, content: "", right_card_id: null, bottom_card_id: null}]
        );
    }

    return (
        <>
            <div className='flex'>
                <div>
                    <div className='border border-zinc-500 rounded-lg p-3 mr-3 my-3'>
                        {sceneCard.content}
                    </div>

                    {/* 三角形 */}
                    {/* https://stackoverflow.com/questions/67133460/how-to-make-a-triangle-shape-with-tailwind */}
                    <div class="w-16 overflow-hidden inline-block">
                        <div class="mx-auto h-6 w-6 bg-black -rotate-45 transform origin-top-left"></div>
                    </div>
                </div>

                <div class="w-6  my-5 overflow-hidden inline-block">
                    <div class=" h-6  bg-black rotate-45 transform origin-top-left"></div>
                </div>

            </div>
        </>
    )
}

export default SceneCard