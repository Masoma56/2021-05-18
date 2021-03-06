import React, { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide';

 function Countdown() {
const deadline = "June, 01, 2021";

const [days, setDays] = useState("0")
const [hours, setHourss] = useState("0")
const [minutes, setMinutes] = useState("0")
const [seconds, setSeconds] = useState("0")

const coundDownCalculator =(deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
        console.log("date passed!") 
    } else {
        const seconds = Math.floor(( time/1000 ) % 60 )
        const minutes = Math.floor(( time/1000/60 ) % 60 )
        const hours = Math.floor ( time / (1000 * 60 * 60 ) % 24 )
        const days = Math.floor (time / (1000*60*60*24))

        setSeconds(seconds)
        setMinutes(minutes)
        setHourss(hours)
        setDays(days)
    }
};

useEffect(() => {
    setInterval(() => coundDownCalculator(deadline), 1000)
})

    return(
        <Slide left delay={1000}>
        <div className="countdown_wrapper">
            <div className="countdown_top">New video in:</div>
            <div className="countdown_bottom">
            <div className="countdown_item">
                <div className="countdown_time">{seconds}</div>
                <div className="countdown_tag">Sekunder</div>
            </div>

            <div className="countdown_item">
                <div className="countdown_time">{minutes}</div>
                <div className="countdown_tag">Minuter</div>
            </div>

            <div className="countdown_item">
                <div className="countdown_time">{hours}</div>
                <div className="countdown_tag">Timmar</div>
            </div>
            
            <div className="countdown_item">
                <div className="countdown_time">{days}</div>
                <div className="countdown_tag">Dagar</div>
            </div>    
            </div>   
        </div>
        </Slide>
    )
}

export default Countdown;