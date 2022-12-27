import React from 'react';

import Header from '../components/Header';
import MainSec from '../components/Mainsec';
import Category from '../components/Category';
import Footer from '../components/Footer';

//images
import gdp1 from "../photo/gdp1.jpg"
import gdp2 from "../photo/gdp2.jpg"
import gdp3 from "../photo/gdp3.jpg"
import gdp4 from "../photo/gdp4.jpg"
import gdp5 from "../photo/gdp5.jpg"
import gdp6 from "../photo/gdp6.jpg"
import gdp7 from "../photo/gdp7.jpg"

const Categories = () => {
    return (
        <React.Fragment>
            <Header />
            <MainSec />
            <div className='categories row d-flex justify-content-center align-content-center'>
                {/* <Category className="col-md-3 col-sm-6 col-12" image = {gdp1}/> */}
                <p className='text-center p-5 fs-3'>Welcome to our</p>
                <h1 className='text-uppercase text-center p-4'>Graphic design studio</h1>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp2}/>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp3}/>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp4}/>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp5}/>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp6}/>
                <Category className="cat col-md-3 col-sm-6 col-12" image = {gdp7}/>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Categories;
