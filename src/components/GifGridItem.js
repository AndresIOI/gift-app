import React from 'react'

const GifGridItem = ( {img, title} ) => {
  return (
    <div className='gif'>
      <img src={img} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
