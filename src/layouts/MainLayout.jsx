import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Banner from '../pages/Home/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';

const MainLayout = () => {
    return (
        <div>
        <Header></Header>

    <Banner></Banner>
<Chefs></Chefs>

         <Footer></Footer> 
        </div>
    );
};

export default MainLayout;