import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Banner from '../pages/Home/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import Section from '../pages/Home/Section/Section';
import Chef from '../pages/Home/Chef/Chef';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
        <Header></Header>



  
<Outlet></Outlet>

         <Footer></Footer> 
        </div>
    );
};

export default MainLayout;