import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';



const Chefs = () => {

    const [chefs, setChefs] = useState([]);

useEffect(() => {
 fetch('https://the-chef-recipe-server-jarinsubahkhan.vercel.app/chefs')  
 .then(res => res.json())
 .then( data => setChefs(data))
 .catch(error => console.log(error)) 
},[])


    return (
        <div className='mb-5'>
      <div className='mb-5'>
      <Banner></Banner>
    
      {
chefs?.chefs?.map(chef => <Chef key={chef.id}
chef={chef}
></Chef>)
      }  
        <Section></Section> 
        </div>  

        </div>
    );
};

export default Chefs;