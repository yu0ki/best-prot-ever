import React from 'react'

const SceneCard = ( {sceneCard} ) => {
  return (
    <>
        <div className='border border-zinc-500 rounded-lg p-3 mr-3 my-3'>
            {sceneCard.content}
        </div>
    </>
  )
}

export default SceneCard