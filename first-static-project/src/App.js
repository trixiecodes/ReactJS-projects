import React from 'react'
import ReactDOM from 'react-dom';
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function Content() {
    return (
        <div>
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(<Content />, document.getElementById("root"))