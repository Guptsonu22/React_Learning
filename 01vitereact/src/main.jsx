import React from 'react'                     
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'

function MyApp () {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}



// const ReactElment = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'   
// }

const anotherElement = (
    <a href="http://google.com" target="_blank">Visit google</a>
)

const anotherUser = "chai aur react"

const reactElment = React.createElement(      
    'a',
    { href: 'https://google.com', target: '_blank' },   
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(  
    
   reactElment
)
