import Footer from "../../components/Footer/Footer";
import * as usersApi from "../../utilities/users-api"
import { useState } from "react";


export default function WorkoutsPage() {
    const [weight, setWeight] = useState(50)
    // regergeragrwgrw
    // argregrgrwgwrg
    // function handleClick() {
    //     usersApi.addSet({weight: weight, reps: 10})
    //     setWeight(weight + 10)
    // }
    // Includes embedded video
    return (
        <>
            <h1>Workouts Page!!!</h1>
            {/* <button onClick={handleClick}>Click Me</button> */}
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rwo-3PTM8U4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/rwo-3PTM8U4?controls=0" title="YouTube video player" frameBorder={'0'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            {/* <video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" style="width: 932px; height: 524px; left: 0px; top: 0px;" src="blob:https://www.youtube.com/5d5623d0-7ed6-40c9-9ae3-9da15520f914"></video> */}
        </>
    )
}
