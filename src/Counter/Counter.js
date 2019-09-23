import React from 'react';
import './Counter.css';

const Counter = (props) => {
    return (
        <div className="counter">

            <div
                className={'circle' + (props.active ? ' active' : '')}
                onClick={props.click}
                style={{ backgroundColor: props.active ? props.active : props.buttonColor }}
            >
                <img className="smile" alt="smiley" src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png"></img>
            </div>
        </div>
    );
}


export default Counter;