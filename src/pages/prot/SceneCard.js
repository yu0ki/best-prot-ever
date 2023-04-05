import React from 'react'

const SceneCard = ( {sceneCard} ) => {
  return (
    <>
        <div className='border p-4 rounded-lg absolute' style={ {left: sceneCard.position_x, top: sceneCard.position_y} }>
            {sceneCard.content}
        </div>
    </>
  )
}

export default SceneCard