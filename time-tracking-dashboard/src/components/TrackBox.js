import React from 'react'
import "./trackbox.css"
function TrackBox(props) {
    const handleMystyle = (style, section) => {
        switch (style) {
            case "Work":
                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">5hrs</h1>
                        <p className="last">Previous - 7hrs</p>
                    </div>

                    )

                }

                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">32hrs</h1>
                        <p className="last">Previous - 36hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">103hrs</h1>
                        <p className="last">Previous - 128hrs</p>
                    </div>
                    )
                }
                break;


            case "Play":
                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">1hr</h1>
                        <p className="last">Previous - 2hrs</p>
                    </div>

                    )

                }
                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">10hrs</h1>
                        <p className="last">Previous - 8hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">23hrs</h1>
                        <p className="last">Previous - 23hrs</p>
                    </div>
                    )
                }

                break;

            case "Study":
                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">0hrs</h1>
                        <p className="last">Previous - 1hr</p>
                    </div>

                    )

                }
                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">4hrs</h1>
                        <p className="last">Previous - 7hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">13hrs</h1>
                        <p className="last">Previous - 19hrs</p>
                    </div>
                    )
                }

                break;

            case "Exercise":

                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">1hr</h1>
                        <p className="last">Previous - 1hr</p>
                    </div>

                    )

                }
                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">4hrs</h1>
                        <p className="last">Previous - 5hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">11hrs</h1>
                        <p className="last">Previous - 18hrs</p>
                    </div>
                    )
                }

                break;
            case "Social":

                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">1hr</h1>
                        <p className="last">Previous - 3hrs</p>
                    </div>

                    )

                }
                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">5hrs</h1>
                        <p className="last">Previous - 10hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">21hrs</h1>
                        <p className="last">Previous - 23hrs</p>
                    </div>
                    )
                }

                break;
            case "SelfCare":

                if (section === "daily") {
                    return (<div className="numbers">
                        <h1 className="now">0hrs</h1>
                        <p className="last">Previous - 1hr</p>
                    </div>

                    )

                }
                if (section === "weekly") {
                    return (<div className="numbers">
                        <h1 className="now">2hrs</h1>
                        <p className="last">Previous - 2hrs</p>
                    </div>
                    )
                }
                if (section === "monthly") {
                    return (<div className="numbers">
                        <h1 className="now">7hrs</h1>
                        <p className="last">Previous - 7hrs</p>
                    </div>
                    )
                }

                break;
            default:
                return (<div className="numbers">
                    <h1 className="now">5hrs</h1>
                    <p className="last">Previous - 11hrs</p>
                </div>)
        }
    }
    return (
        <div className={props.mystyle}>
            <div className="insideBox">
                <div className="line">
                    <h5>{props.mystyle}</h5>
                    <p className="dots">...</p>
                </div>
                <div>{handleMystyle(props.mystyle, props.timeSection)}</div>
            </div>




        </div>
    )
}

export default TrackBox
