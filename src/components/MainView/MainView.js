import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow'

const MainView = () => {

        return(
            <React.Fragment>
                <NavBar></NavBar>
                <SlideShow></SlideShow>
                <div> 
                    <p> This is main component </p>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
}

export default MainView