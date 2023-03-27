import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "You can call me a React Js Developer.",
          "I'm a Flutter Developer too.",
          "I love sketching.",
          "Art fascinates me.",
          "History isnt my cup of tea.",
          "Love to mess up things.",
          "I love to sing but not when someone is listening.",
          "I love drumroll songs.",
          "I can make animated pictures, GIFs and a lot things...",
          "I can’t tell where the journey will end, but I know where to start” – Avicii"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  )
}

export default Text