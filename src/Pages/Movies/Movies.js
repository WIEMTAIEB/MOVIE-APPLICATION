

import axios from 'axios'




//start function map movies **********************************
const Movies = ({movie}) => {
   
    return (
        <div className="sara">
            <span classeName = "pageTitle">Movies</span>
            {movie.map(el=>
              <div className="movie">
                <h1>{el.name}</h1>
                <h2>{el.imdbRating}</h2>
                <h3>{el.category}</h3>
                <h3>{el.id}</h3>
                
              </div>
             
              )}
             
        </div>
    )
}
export default Movies;
//end function map movies **********************************




