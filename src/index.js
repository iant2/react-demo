import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  /*
  3) ADDING STATE
  To “remember” things, components use state.

  React components can have state by setting this.state in their
  constructors. 

  this.state should be considered as private to a React component
  that it’s defined in. Let’s store the current value of the Square
  in this.state, and change it when the Square is clicked.
  */

  // 3.a: add constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  // 3.b change the Square classes render method to display current state's
  // when clicked
  render() {
    return (
      /*
      2) MAKING AN INTERACTIVE COMPONENT: 

      Let’s fill the Square component with an “X” when we click it.
      First, change the button tag that is returned from the Square
      component’s render() function:
      */
      <button className="square" onClick={function() {alert('click')}}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    /*
    1) PASSING THROUGH PROPS:

    There are currently no interactive pieces in our game.
    We should pass some data from our board (which renders squares)
    into our squares.

    i is the prop as it is the parameter of the functional component.

    return <Square value={i}/>
    */
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

