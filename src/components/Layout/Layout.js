import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import cards from "../../cards.json";
import Cards from "../Cards/Cards";


class Layout extends React.Component {
    
    state = {
        cards,
        score: 0,
        topScore: 0,

    }
    
    render() {
        return (
            <div>
            <Nav />
            <Header />
            {this.state.cards.map(card => (
                <Cards 
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.iamge}
                />
            ))}
            
            </div>
        );
    }
};

export default Layout;