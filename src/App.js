import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Gameover from './Gameover/Gameover';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    showGameOver: false
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if(this.state.rounds >=3){
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (
      nextActive === this.state.current
    );

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next.bind(this), this.pace);
    console.log(this.state.current);

    this.setState({
      rounds: this.state.rounds +1
    });

    console.log(this.state.rounds);
  }

  clickHandler = (btnId) => {
    console.log('Sweet!', btnId);
    if (this.state.current !== btnId) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1
    });

    this.setState({
      rounds: 0
    });
  }

  startHandler = () => {
    this.next();
  }

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({ showGameOver: true })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Speed Game</h1>
          <p>Your score is: {this.state.score}</p>
        </div>
        <div>
          {this.state.showGameOver &&
            <Gameover
              score={this.state.score}
            />}
        </div>
        <Counter
          buttonColor='#fcf4aa'
          active={this.state.current === 1}
          click={() => this.clickHandler(1)}
        />
        <Counter
          buttonColor='#40f8f4'
          active={this.state.current === 2}
          click={() => this.clickHandler(2)}
        />
        <Counter
          buttonColor='#f86ee8'
          active={this.state.current === 3}
          click={() => this.clickHandler(3)}
        />
        <Counter
          buttonColor='#6e84d6'
          active={this.state.current === 4}
          click={() => this.clickHandler(4)}
        />

        <div>
          <button className="buttons"
            onClick={this.startHandler}>Start Game</button>
          <button className="buttons"
            onClick={this.endHandler}>Stop Game</button>
        </div>
      </div>
    );
  }
}

export default App;
