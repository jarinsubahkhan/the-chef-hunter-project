import React, { useEffect, useState } from 'react';



const Chefs = () => {

    const [chefs, setChefs] = useState([]);

useEffect(() => {
 fetch('http://localhost:5000/chefs')  
 .then(res => res.json())
 .then( data => console.log(data))
 .catch(error => console.log(error)) 
},[])


    return (
        <div>
      <h2>This is a chef  recipes page</h2>
      <div>
      {
chefs?.chefs?.map(chef => <p key={chef.id}>
    {chef.name}
</p>)
      }  
        
        </div>      
        </div>
    );
};

export default Chefs;