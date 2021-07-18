import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertAppp = () => {

  const [categories, setCategories] = useState(['League of Legends']);

  return(
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>
      <ol>
        {
          categories.map(category => ( 
            <GifGrid 
              key={category} 
              category={category} 
            /> 
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertAppp;