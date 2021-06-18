
import {Container} from "@material-ui/core";
import {useState , useEffect } from "react"
import axios from 'axios'

import "./App.css";
import Header from "./Components/Header.js";
import SimpleBottomNavigation from "./Components/MainNav";
import { BrowserRouter, Switch, Router , Route} from 'react-router-dom';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Admin from "./Pages/Admin"
import Search from "./Pages/Search/Search";
import Homm from './Pages/Home';
import { SettingsInputAntenna } from "@material-ui/icons";
import Favoris from "./Components/Favoris";
import Video from "./Components/Video"













function App() {
const [msg , setMsg] =  useState("")
const [movie,setMovie]= useState([])



const fetchMovies = ()=>{

  axios.get("http://localhost:4000/posts")
        .then(response=>setMovie(response.data))
        .catch(err =>console.log(err))

}



//const modifyMovie=(id)=>



useEffect(()=>fetchMovies(),[]) 
//xxxx
const [favorite, setFavorite] = useState(0)
    const getFavorites =() => {
      setFavorite(favorite + 1)
    }

    const [favoriteMovies, setFavoriteMovies] = useState([])
    const addFavoriteMovies =(e) => {
    favoriteMovies.push(e)
    setFavoriteMovies(favoriteMovies)
    
    }
//xxx
return(
<>
         <BrowserRouter>
            <div> 
                <Route exact path = '/' > <Homm favorite={favorite} getFavorites={getFavorites}/> </Route>
                <Route path = '/movies'>
                    <Movies movie = {movie} />
                </Route>
                <Route path = '/series' component = {Series} />
                <Route path ="/admin" >
                  <Admin movie = {movie}/>
                </Route>
                <Route   path="/Homm" > <Homm movie = {movie} getFavorites={getFavorites} favoriteMovies={favoriteMovies} addFavoriteMovies={addFavoriteMovies}  /></Route>
                <Route   path="/Favoris" > <Favoris movie  = {movie}   favorite = {favorite}  favoriteMovies = {favoriteMovies}/></Route>
                </div>
                
           </BrowserRouter> 
           
        
           
      
</>
  ) 
 


}

export default App;
