import React from 'react'
import background from './KC.jpg';


function Home() {
    return (
        <div className="container p-0 m-0">
            <div class="row">
                <div class="col text-center"></div>
                <img className="background" src={background} />
                <h1 className="display-1 text-center" id="logo">Cartography By K</h1>
            </div>
        </div>
    )
}

export default Home
