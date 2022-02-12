import { useState } from 'react';
import TrackBox from './components/TrackBox';
import "./App.css"
import jeremyxd from "./image-jeremy.png"
function App() {

  const [section, setSection] = useState("daily");
  const handleClickd = () => {
    setSection("daily");
    console.log("Daily");
  }
  const handleClickw = () => {
    setSection("weekly");
    console.log("Weekly");
  }
  const handleClickm = () => {
    setSection("monthly");
    console.log("Monthly");
  }


  return (
    <div className="dashBoard">
      <div className="jeremyRobson">
        <div className="violet">
        <img src={jeremyxd} alt="jeremy's" className="img-jeremy" />
        <p className="reportFor">Report for</p>
        <h1 className="name">Jeremy Robson</h1>
        </div>
        <div className="buttons">
        <button className={section==="daily"?"sectionBtnOn":"sectionBtn"} onClick={handleClickd}>Daily</button>
        <button className={section==="weekly"?"sectionBtnOn":"sectionBtn"} onClick={handleClickw} >Weekly</button>
        <button className={section==="monthly"?"sectionBtnOn":"sectionBtn"} onClick={handleClickm}>Monthly</button>
        </div>
      </div>
      <TrackBox mystyle={"Work"} timeSection={section}  />
      <TrackBox mystyle={"Play"} timeSection={section} />
      <TrackBox mystyle={"Study"} timeSection={section} />
      <TrackBox mystyle={"Exercise"} timeSection={section} />
      <TrackBox mystyle={"Social"} timeSection={section} />
      <TrackBox mystyle={"SelfCare"} timeSection={section} />
    </div>
  );
}

export default App;
/* Report for
Jeremy Robson

Daily 
Weekly
Monthly

Work
5hrs <!-- daily -->
Previous - 7hrs <!-- daily -->
32hrs <!-- weekly -->
Previous - 36hrs <!-- weekly -->
103hrs <!-- monthly -->
Previous - 128hrs <!-- monthly -->

Play
1hr <!-- daily -->
Previous - 2hrs <!-- daily -->
10hrs <!-- weekly -->
Previous - 8hrs <!-- weekly -->
23hrs <!-- monthly -->
Previous - 29hrs <!-- monthly -->

Study
0hrs <!-- daily -->
Previous - 1hr <!-- daily -->
4hrs <!-- weekly -->
Previous - 7hrs <!-- weekly -->
13hrs <!-- monthly -->
Previous - 19hrs <!-- monthly -->

Exercise
1hr <!-- daily -->
Previous - 1hr <!-- daily -->
4hrs <!-- weekly -->
Previous - 5hrs <!-- weekly -->
11hrs <!-- monthly -->
Previous - 18hrs <!-- monthly -->

Social
1hr <!-- daily -->
Previous - 3hrs <!-- daily -->
5hrs <!-- weekly -->
Previous - 10hrs <!-- weekly -->
21hrs <!-- monthly -->
Previous - 23hrs <!-- monthly -->

Self Care
0hrs <!-- daily -->
Previous - 1hr <!-- daily -->
2hrs <!-- weekly -->
Previous - 2hrs <!-- weekly -->
7hrs <!-- monthly -->
Previous - 11hrs <!-- monthly --> */