import React from 'react';
import './Gameover.css';

const closeHandler = () => {
window.location.reload();
}

const Gameover = (props) => {
    return (
        <div id="result">
            <div className="gameoverbox">
                <p className="gameover">Game over! Score: {props.score}</p>
                <button className="buttons" onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
}

export default Gameover;