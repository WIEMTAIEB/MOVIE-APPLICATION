import React, {useState,useEffect}from 'react';
import {Card,Button } from 'react-bootstrap';
import axios from 'axios'
import {FaHeart} from "react-icons/fa"
import {BiCameraMovie} from "react-icons/bi"
import '../App.css';

function Movielist ({input ,getFavorites, addFavoriteMovies, favoriteMovies}) {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{ 
    
    axios.get("http://localhost:4000/posts")
    .then(response=>setMovie(response.data))
    .catch(err =>console.log(err))
  }
  
  useEffect(()=> {getMovie()
  },[])

  console.log(movie)
  return(
    <div className="sara"  >
      {

      movie.filter(el=>el.name.toLowerCase().includes(input.toLowerCase())).map(el=>
        <div >
  
  <Card className="myCard"   >
    <Card.Img  className= "mt-5" variant="top" src={el.Images}    />
    <Card.Body className="corps">
    <Button onClick={()=> {getFavorites();addFavoriteMovies(el)}}> <FaHeart/>  </Button> <Button  className= " wi" > <BiCameraMovie/>   </Button>
   

      <Card.Title>{el.name}</Card.Title>
      <Card.Text>{el.category}</Card.Text>
      <Card.Text>{el.imdbRating}<img className="star" alt="star" src="https://i.pinimg.com/originals/03/2f/ce/032fce11a0fb8e87c65b3369a6443674.png" /></Card.Text>
     
    </Card.Body>
  </Card>
  </div> 
        )
      }
    </div>
  
   )
  
 }
  
export default Movielist;


