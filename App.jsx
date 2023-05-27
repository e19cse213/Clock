import React, { useState } from "react";
import Note from "./Note"
function App(){

const now = new Date().toLocaleTimeString();
const [time,setTime] = useState(now)

function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
}
setInterval(updateTime,1000)

    return (
        <div>
            <button onClick={updateTime}>Get Time</button>
            <h1 >{time}</h1>
            
        </div>
    );
}


export default App;