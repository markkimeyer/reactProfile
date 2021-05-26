import React from 'react';
import monitor from "../../Images/monitor.jpg";
import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
    return (
        <div className = {classes.Container} >
            <img
    src={monitor}
    alt="monitor"
    />
    <div className={classes.Content}>
<div className ={classes.SubContent} >
<video className = {classes.Video} 
    width="55%"
    height="fit-content"
    controls
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Miley"
    autoPlay= {false}
    muted = {true}
    playsInLine
    src = "https://chriscastle.com/temp/chrisg/videos/NewWreckingBall.mp4"
    /> 
</div>

    </div>
        </div>
    )
}

export default BackgroundVideo;