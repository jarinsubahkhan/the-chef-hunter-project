import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetail.css';
import { Container } from 'react-bootstrap';


const ChefDetail = () => {
    const chef = useLoaderData();
    const {name,id,picture,
        experience,num_recipes,likes, bio, recipes} = chef;
        
    return (
     <Container>
           <div className="banner-container">
  <div className="chef-info">
    <img src={picture} alt="Chef Name" className="chef-picture" />
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
          <p><small>Rating : {recipes[0].rating}</small></p>
        </div>
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
          <p><small>Rating : {recipes[1].rating}</small></p>
        </div>
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
          <p><small>Rating : {recipes[2].rating}</small></p>
        </div>
    </div>

      </div>
     </Container>
    );
};

export default ChefDetail;