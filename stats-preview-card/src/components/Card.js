import React from 'react'
import personas from "./image-header-desktop.jpg"
import "./Card.css"


function Card() 
{
    return (
        <div className="card">
            <div className="text">
                <div className="maintext">

                    <h1 className="title">Get <span className="insights">insights</span> that help your business grow.</h1> 
                    <p className="littletext">Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.</p>
                </div>
                <div className="numers">
                    <div className="one"><h1>10k+</h1><p className="names-numbers">companies</p></div>
                    <div className="two"><h1>314</h1><p className="names-numbers">templates</p></div>
                    <div className="three"><h1>12M+</h1><p className="names-numbers">queries</p></div> 
                </div>

            </div>
            <div className="background-personas">
            <img className="img-personas" src={personas} alt="music" />            

            </div>
        </div>
    )
}

export default Card
