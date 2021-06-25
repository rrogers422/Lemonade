import React from 'react';
import "./home.scss";

export default function Home() {
    return (
        <div className="home">
        <div className="container">
           <div className="imgContainer">
                <img src="assets/logo.png" alt="logo for clout media - connecting the music industry together"/>
           </div>
        </div>
        <div className="buttons">
        <button className="initialButton"type="submit"> Signup!</button>
        <button className="button2" type="submit">Learn More!</button>
        </div>
        
        </div>
    )
}



