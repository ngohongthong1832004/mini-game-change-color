import './App.css';
// import {useRef, useEffect, useState} from 'react';
import { RouterProvider, useRoute, useRouter } from 'react-router-dom';
import router from './router/index.js';

function App() {

  let count = 0
  const handleChangeColor = () => {
    count++;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementsByClassName('header')[0].style.color = "#" + randomColor;
    document.getElementsByClassName('header')[1].style.color = "#" + randomColor;

    const randomColorBackground = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName('App')[0].style.backgroundColor = "#" + randomColorBackground;

    console.log(`Clicked ${count} //`   ,"Text-color : ",randomColor, " ======= ","Background-color : ", randomColorBackground);

    if (count === 281474943156225) {
      alert("You are so lucky");
    }
    if (randomColor === randomColorBackground) {
      alert("You are so lucky");
    }
  }  

  window.addEventListener('keydown', (e) => {
    handleChangeColor();
  })
  return (
    <div className="App" style={{backgroundColor : "blue"}}>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Rubik+Puddles&display=swap');
      </style>
      <div className='content'>
        <h1 className = "header" style={{color : "red"}}>Can you do it !!</h1>
        <h1 className = "header" style={{color : "red"}}>Background-Color {"<===>"} Text-Color</h1>
        <button className='btn' onMouseDown={handleChangeColor} >
          <span>Click</span>
        </button>
        <ul>
          <li>There is ( 1 / 281474943156225 % ) you are WIN :))</li>
          <li>Click on the button to change the background color of the page.</li>
          <li>If you don't want click you can press any key in your keyboard</li>
          <li>When the background color changes, the text color will change to the same color as the background color.</li>
          <li>When the background color and text color are the same, you will be notified.</li>
          <li>Open the console tap in devtool to check color</li>
          <li>Fun fact: If you are patient you win ( Click 281474943156225 times ^^ )</li>
        </ul>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
