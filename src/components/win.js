import React from 'react';
import Home from './home';
import Game from './game';

class Win extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <div className="gameFooter">
        <p id="final_results">Player Score: {this.props.computerScore}  Computer Score: {this.props.playersScore}</p>
        {(this.props.computerScore > this.props.playersScore) ? <p>Computer Wins</p> : (this.props.computerScore < this.props.playersScore) ? <p>Player Wins</p> : <p>Player and Computer Tie</p>}
        <button onClick={this.props.handlePlayAgain}>Play Again</button>
        <button onClick={this.props.handleMainMenu}>Main Menu</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Win;
