import React, { Component } from 'react';
import Card from "./component/Card";
import Wrapper from "./component/Wrapper";
import Header from "./component/Header";
import cards from "./component/cards.json";
import './App.css';


class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }


    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Game Over, Try again loser!");
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count = 1;
          this.setState({ score: this.state.score + 1 }, () => {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game<h5>Try not to click the same image twice!</h5></Header>
        {this.state.cards.map(card => (
          <Card
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image} />
        ))}
    </Wrapper>
    ); 
  };
}

export default App;
