import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css"
import Content from './App'

function Page() {
    return (
        <div>
            <Content />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))