import React, {useState,useEffect}from 'react';
import {Card,Button, Navbar } from 'react-bootstrap';
import axios from 'axios'
import {FaHeart} from "react-icons/fa"
import '../App.css';
import Navbarr from './Navbr';


const Favoris =({movie, favorite, favoriteMovies, getFavorites ,getInput }) => {
   
    
return(
    
  
    <div>
        <Navbarr  favorite={favorite} getInput = {getInput}  getFavorites= {getFavorites} />
{favoriteMovies.map(el=>
<Card className="carte" style={{ width: '14rem' }}>
<Card.Img  className= "mt-5" variant="top" src={el.Images} style={{height:'250px'}}  />
<Card.Body className="corps">
<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
            </i>
  <Card.Title>{el.name}</Card.Title>
  <Card.Text>{el.category}</Card.Text>
  <Card.Text>{el.imdbRating}<img className="star" alt="star" src="https://i.pinimg.com/originals/03/2f/ce/032fce11a0fb8e87c65b3369a6443674.png" /></Card.Text>
 <Button  onClick = {() => getFavorites()} > <FaHeart/>  </Button>
</Card.Body>
</Card>

    )}
    </div> 
 )

}

export default Favoris;