import '../App.css';
import Navadmin from "../Components/Navadmin";
import React, {useState  } from 'react'

import axios from 'axios'
import { Button ,Modal, Form, Card } from "react-bootstrap";

/**
* @author
* @function Admin
**/


const Admin = ({movie}) => {

  const [newMovie,handelMovie]=useState([{name:"",imdbRating:"",category:"", Images:""}])
// delete Movie
  const deleteMovie= (id)=>{

    axios.delete(`http://localhost:4000/posts/${id}`)
    .then(response=> console.log(response) ) .then(res=>refresh())
    .catch(err=>err)
  
  }
  const handelChange = (e)=>{

    const {name,value}= e.target
    //SettingsInputAntenna({...addedmovie,[name]:value})
    handelMovie({...newMovie,[name]:value})
    console.log("hhhhhhh", newMovie)
    
    
    
    }
  // Add movie
  const addMovie=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/posts",newMovie)
    .then(response=> console.log(response) ).then(res=>refresh())
    .catch(err=>err)
    
    
    
    }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const refresh=()=>{
    window.location.reload()
  }

  return(
    <div>

<div className="navi" >
<Navadmin />
</div>


    <span classeName = "pageTitle"></span>


          <div className="AddMovie">
                
                <Button variant="primary" onClick={handleShow} className="Button" >
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={addMovie}>
        <Form.Group>
          <Form.Control type="url" 
              name="image"
              value={newMovie.Images}
              onChange={(e) =>
                handelMovie({ ...newMovie,Images: e.target.value })
              } placeholder="Img of the movie " />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="name"
              value={newMovie.name}
              onChange={(e) =>
                handelMovie({ ...newMovie, name: e.target.value })
              } placeholder="Name of the movie " />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="category"
              value={newMovie.category}
              onChange={(e) =>
                handelMovie({ ...newMovie,category: e.target.value })
              }  placeholder="Category of the movie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="imdbRating"
              value={newMovie.imdbRating}
              onChange={(e) =>
                handelMovie({ ...newMovie,imdbRating: e.target.value })
              }  placeholder="imdbRating of the movie " min="1" max="10" step="0.1"/>
        </Form.Group>
        <div className="d-flex justify-content-center">
           <Button className="btn-icon" type="submit" > Add New Movie</Button>
         </div>
         
      </Form>



        </Modal.Body>
        
      </Modal>
                
            </div >


   <div className="d-flex justify-content-around flex-wrap">
   {movie.map(el=>
      <div className="movie">
        <div>

<Card className="carte my-3" style={{ width: '14rem' }}>
  <Card.Img variant="top" src={el.Images} style={{height:'250px'}}  />
  <Card.Body className="corps">

    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.category}</Card.Text>
    <Card.Text>{el.imdbRating}<img className="star" alt="star" src="https://i.pinimg.com/originals/03/2f/ce/032fce11a0fb8e87c65b3369a6443674.png" /></Card.Text>
    <Button className="boutton" variant="" onClick={()=>deleteMovie(el.id)} >delete Movie </Button>
  </Card.Body>
</Card>
</div> 
        
      
      </div>
     
      )}
   </div>






</div>
   )

 }

export default Admin