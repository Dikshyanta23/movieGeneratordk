import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai';

const Data = ({movies}) => {
    
  return (
    <div className='movies'>
        
        {movies.map((movie) => {
            const {id, original_title:title, overview, release_date, poster_path:img, vote_average:rating} = movie
            const image_loc = 'http://image.tmdb.org/t/p/w500/'+img

            return (
              <article className="movie" key = {id}>
                <img src={image_loc} alt={title} />
                <div className="movie-text">
                  <h4>{title}</h4>
                  <div className="rating">
                    <AiTwotoneStar />
                    <h5>{rating}</h5>
                  </div>

                  <p>{overview.substring(0, 200)}</p>
                </div>
              </article>
            );
        })}
    </div>
  )
}

export default Data
