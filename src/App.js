import React from "react";

import allcards from "./allcards";
import Cards from "./components/Cards"
import Header from "./components/Header";
import Layout from "./components/Layout";
import Nav from "./components/Nav";

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


class App extends React.Component {

    state = {
        allcards,
        currentScore: 0,
        topScore: 0,
        message: "",
        clickedCard: [],
    
    };

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
          currentScore: newScore,
          message: "Yes!"
        });
        if (newScore >= this.state.topScore) {
          this.setState({ topScore: newScore });
        }
        else if (newScore === 12) {
          this.setState({ message: "You win!" });
        }
        this.handleShuffle();
      };

    handleReset = () => {
    this.setState({
        currentScore: 0,
        topScore: this.state.topScore,
        message: "Nope!",
        clickedCard: []
    });
    this.handleShuffle();
    };

    handleClick = id => {
        if (this.state.clickedCard.indexOf(id) === -1) {
          this.handleIncrement();
          this.setState({ clickedCard: this.state.clickedCard.concat(id) });
        } else {
          this.handleReset();
        }
      };

    handleShuffle = () => {
    let shuffledCards = shuffleCards(allcards);
    this.setState({ friends: shuffledCards});
    };
    
    render() {
        return (
            <Layout>
                <Nav 
                title="Donut Clicky Game"
                />
                <Header
                message={this.state.message} 
                score={this.state.currentScore}
                topScore={this.state.topScore}
                />
                <div className="container">
                    <div className="row">
                    {this.state.allcards.map(card => (
                        <div className="col-md-3">
                        <Cards
                        handleClick={this.handleClick}
                        handleShuffle={this.handleShuffle} 
                        id={card.id}
                        key={card.id}
                        name={card.name}
                        image={card.image}
                        />
                        </div>      
                    ))}
                    </div>
                </div>
            </Layout>
            

        );
    }

}





export default App;
