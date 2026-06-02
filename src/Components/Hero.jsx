import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

 export const Hero = () =>{
    return(
<div
  className="text-white p-5 text-center mt-5 h-100"
  style={{
    background: `
      linear-gradient(
        135deg,
        #502c87 0%,
        #7d52c4 35%, 
        #a727f2 70%,
        #764ABC 100% 
      )
    `,
  }}//nedereste farve orginalfarve: #764ABC
>    <h1>Makeupstore</h1>
    <h2> Redux </h2>
    <p>Opdage nyeste trends indenfor makeup og skincare.</p>
  </div>    )
}
export default Hero