import React from 'react'

const SceneCard = ( {sceneCard} ) => {
  return (
    <>
        <div className='absolute border border-zinc-500 rounded-lg p-3 mr-3 my-3' style={ {left: sceneCard.position_x, top: sceneCard.position_y} }>
            {sceneCard.content}
        </div>
    </>
  )
}

export default SceneCard