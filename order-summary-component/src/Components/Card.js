import React from 'react'
import music from "./icon-music.svg"
import "./Card.css"

function Card() {
    return (
        <div className="card">
            <div className="top">
            </div>
                         
    <div className="mid">
                  <h1 className="title">Order Summary</h1>
                    <p className="text">you can now listen to millons of songs,
                        audiobooks,and podcast on any device
                        anywhere you like!
                    </p>
                </div>
                <div className="anualplan-box">
                    <img className="music" src={music} alt="music" />
                    <div className="mid-anual">
                    <h4>Annual plan</h4>
                    <p className="price">$59.99/year</p>
                    </div>
                    <p className="change">change</p>

                </div>
                <div className="bottom">
                    <button className="blue-btn">Proceed to Payment</button>
                    <button className="white-btn">Cancel Order</button>                    
                </div>            
        </div>
    )
}

export default Card

