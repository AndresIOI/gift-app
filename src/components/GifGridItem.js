import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ( {img, title} ) => {
  return (
    <div className='gif'>
      <img src={img} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem;

GifGridItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
