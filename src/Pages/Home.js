import Foo from "../Components/Footer"
import Navbarr from '../Components/Navbr';

import Ticket from '../Components/Tickets';
import Action from '../Components/Takeaction';
import Browser from '../Components/Browsing';
import { useState } from 'react';
import Header from "../Components/Header"

import Movielist from '../Components/Film';


import Car from '../Components/Carousell';
import '../App.css';
import Video from "../Components/Video"





function Homm({favorite , getFavorites, addFavoriteMovies, favoriteMovies}) {
    const [input , setInput] = useState ("")
    const getInput = (e)=> {
    setInput(e.target.value) 
    console.log('myinput',input)
    }
        return (
            <div>
        <Navbarr  favorite={favorite} getInput = {getInput}  getFavorites= {getFavorites} />
        <Action/>
        <Browser/>
        <h1 className="text-center my-5">New Releases
</h1>
         <div className="container  "> 
         <Movielist input = {input} favoriteMovies={favoriteMovies} getFavorites={getFavorites}  addFavoriteMovies={addFavoriteMovies}/>
        </div>
        <Video/>
        
        <Ticket/>
        
       <Foo/>
       <Header/>
       
    
        </div>
        )
    }
    
    export default Homm;