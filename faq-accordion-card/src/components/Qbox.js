
import React, { useState } from 'react';
import "./Qbox.css";
import imgarrow from "./icon-arrow-down.svg"

function Qbox(props) {
    const [btnpressed, setbtnpressed] = useState(false);
    const handleClick = () => {
        setbtnpressed(!btnpressed);
        console.log(btnpressed);
    }
    let ansr;
    if (btnpressed) {
        ansr = props.answer;
    }
    else {
        ansr = null;
    }
    return (


        <button className={btnpressed ? "btnON" : "btnOFF"} onClick={handleClick}>
            <h5 className="qtitle">{props.question}</h5>
            <img src={imgarrow} alt="" className={btnpressed ? "arrowup" : "arrowdown"} />
            <p className="ansr">{ansr}</p>
        </button>

    )
}

export default Qbox
