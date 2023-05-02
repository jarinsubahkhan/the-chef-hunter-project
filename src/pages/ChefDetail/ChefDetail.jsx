import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetail = () => {
    const chef = useLoaderData();
    const {name,id,picture,
        experience,num_recipes,likes, bio, recipes} = chef;
        
    return (
        <div>
     <h2>Chef detail coming soon</h2> 
     
        </div>
    );
};

export default ChefDetail;