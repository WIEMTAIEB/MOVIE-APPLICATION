import '../App.css';

import{Carousel} from "react-bootstrap";


function Car(){
  return (
<div>
<Carousel  className="caro" fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.socialnews.xyz/wp-content/uploads/2021/04/23/mortal-kombat-review-an-insanely-brutal-martial-arts-action-movie-for-the-game-fans.jpg"
      alt="First slide"
    />
  </Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/37945.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.teahub.io/photos/full/212-2128150_free-deadpool-artwork-movie-computer-desktop-wallpapers-deadpool.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div> 
)
    }

export default Car;