import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {

  const {gifs, loading} = useFetchGifs(category);


  return (
    <>
      <h3>{ category }</h3>
      {
        loading ? 'Cargando...' : 
          (
            <div className="gif-grid animate__animated animate__fadeIn">
              {
                gifs.map( (gif) => (
                  <GifGridItem 
                    key={gif.id}
                    {...gif} 
                  />
                ))    
              }
            </div>
          )
      }
      
    </>
  )
}

export default GifGrid;