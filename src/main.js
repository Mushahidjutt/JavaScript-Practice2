import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'




document.querySelector('#app').innerHTML = `
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="flex justify-center items-center space-x-4">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="text-3xl font-bold mt-4">Hello Vite!</h1>
    <div class="card mt-4">
      <button id="counter" type="button">jjjj</button>
    </div>
    <p class="read-the-docs mt-4">
      Click on the Vite logo to learn more
    </p>

    
    <div class="bg-blue-500 text-white p-4 text-center mt-4 w-full">
      <h1 class="text-3xl font-bold">Tailwind CSS Test</h1>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
;