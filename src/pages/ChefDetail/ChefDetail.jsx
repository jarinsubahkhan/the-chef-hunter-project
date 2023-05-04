import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetail.css';
import { Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from 'react-lazy-load';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const ChefDetail = () => {
    

    const chef = useLoaderData();
    const {name,id,picture,
        experience,num_recipes,likes, bio, recipes} = chef;
        
        const [favorite, setFavorite] = useState(false);
        const [marked, setMarked] = useState(false);
        const [added, setAdded] = useState(false);
 

  const handleFavoriteClick = (event) => {
        setFavorite(true)
        toast("This recipe is your favorite!");
  };
  const handleMarkedClick = (event) => {
        setMarked(true)
        toast("This recipe is your favorite!");
  };
  const handleAddedClick = (event) => {
        setAdded(true)
        toast("This recipe is your favorite!");
  };

  


    return (
     <Container>
           <div className="banner-container">
  <div className="chef-info">
    <div>
        <LazyLoad onContentVisible={() => {console.log('loaded!')}}>
        <img src={picture} alt="Chef Name" className="chef-picture" />
        </LazyLoad>
    </div>
    <h2 className="chef-name">{name}</h2>
    <p className="chef-bio">BIO : {bio}</p>
    <p className="chef-likes">LIKES : {likes}</p>
    <p className="chef-recipes">NUMBER OF RECIPES : {num_recipes}</p>
    <p className="chef-experience">YEARS OF EXPERIENCE : {experience}</p>
  </div>
</div>
<div className="card-group">

      <div className="card">
       
        <div className="card-body">
          <h5 className="card-title">{recipes[0].recipe_name}</h5>
          <div>
            <h6>Ingredients :</h6>
          <p className="card-text">{recipes[0].ingredients}</p>
         
          </div>

          <div>
            <h6>Cooking Method :</h6>
          <p className="card-text">{recipes[0].cooking_method}</p>
          </div>
          <div className='flex-grow-1 d-flex align-items-center'>
                <Rating style={{ maxWidth: 90 }} value={(recipes[0].rating)} readOnly />
                    <span className='ms-2'>{recipes[0].rating}</span>
                </div>
          {/* <p><small>Rating : {recipes[0].rating}</small></p> */}
        </div>
        <Button
        variant="dark"
        onClick={handleFavoriteClick}
        disabled={favorite}
      >
        Favorite
      </Button>
      <ToastContainer />
    </div>

      <div className="card">
       
        <div className="card-body">
          <h5 className="card-title">{recipes[1].recipe_name}</h5>
          <div>
            <h6>Ingredients :</h6>
          <p className="card-text">{recipes[1].ingredients}</p>
          </div>

          <div>
            <h6>Cooking Method :</h6>
          <p className="card-text">{recipes[1].cooking_method}</p>
          </div>
          <div className='flex-grow-1 d-flex align-items-center'>
                <Rating style={{ maxWidth: 90 }} value={(recipes[1].rating)} readOnly />
                    <span className='ms-2'>{recipes[1].rating}</span>
                </div>
          {/* <p><small>Rating : {recipes[1].rating}</small></p> */}
        </div>
        <Button
        variant="dark"
        onClick={handleMarkedClick}
        disabled={marked}
      >
        Favorite
      </Button>
      <ToastContainer />
    </div>

      <div className="card">
       
        <div className="card-body">
          <h5 className="card-title">{recipes[2].recipe_name}</h5>
          <div>
            <h6>Ingredients :</h6>
          <p className="card-text">{recipes[2].ingredients}</p>
          </div>

          <div className='mt'>
            <h6>Cooking Method :</h6>
          <p className="card-text">{recipes[2].cooking_method}</p>
          </div>
          <div className='flex-grow-1 d-flex align-items-center'>
                <Rating style={{ maxWidth: 90 }} value={(recipes[2].rating)} readOnly />
                    <span className='ms-2'>{recipes[2].rating}</span>
                </div>
          {/* <p><small>Rating : {recipes[2].rating}</small></p> */}
        </div>
        <Button
        variant="dark"
        onClick={handleAddedClick}
        disabled={added}
      >
        Favorite
      </Button>
      <ToastContainer />
    </div>

      </div>
     </Container>
    );
};

export default ChefDetail;