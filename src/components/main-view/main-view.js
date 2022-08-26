import React from 'react';
import NavBar from '../nav-bar/nav-bar';

export default class MainView extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <React.Fragment>
                <NavBar></NavBar>
                <div> 
                    <p> This is main component </p>
                </div>
            </React.Fragment>
        );
        
    }
}