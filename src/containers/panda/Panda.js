import React from "react";
import "./moving_panda.css";

export default function Panda() {

  function play() 
    {
      const audio = document.getElementById("audio");
      audio.play();
    }

  return (    
    <body>
  <a href="#" onclick="play()">

    <audio id="audio" src="https://git.io/JUW4q" loop="loop"></audio>
  
    <script>
      play();    
    </script>
    
    <div id="panda"></div>
    <div id="street"></div>
    </a>
</body>
  )
}