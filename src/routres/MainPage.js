import React from 'react';

//import my pages
import Header from '../components/Header'
import Mainsec from '../components/Mainsec'
import Services from '../components/Services'
import StartProject from '../components/StartProject'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function MainPage() {
    return ( 
        <React.Fragment>
            <Header />
            <Mainsec />
            <Services />
            <StartProject />
            <Contact />
            <Footer />
        </React.Fragment>
     );
}

export default MainPage;