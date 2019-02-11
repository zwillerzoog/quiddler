
import React from "react";
import Deal from './Deal'
import Letters from './Letters';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: {},
            Word: {},
            Discard: {},
            round: [1,2,3],
            clicked: '',
            active: false
        }
    }

    componentDidMount() {
        console.log('mounted')
        let round = this.state.round.length;
        let Cards = Object.assign({}, this.state.Cards);
        if (round > 0) {
            let noRepeats = []
            for (let i = 0; i < round; i++) {
                let random = Math.floor(Math.random() * Object.keys(Letters).length);
                if (random !== noRepeats[0] && random !==noRepeats[1]) {
                    Cards[random] = [Object.keys(Letters)[random], Letters[Object.keys(Letters)[random]]];
                    this.setState({Cards})
                    noRepeats.push(random)
                } else {
                    i--
                }
            }}

    }

    highlight(e) {
        console.log(e.currentTarget)
    }

    //LEFT OFF HERE
    // the full Card key array needs to be deleted from Cards and added to Word
    //add clicked letter to state
    recordLetter(e){
        // e.preventDefault();
        let letter = e.currentTarget.textContent;
        let deal = this.state.Cards;
        for (let foo in deal) {
            if (deal[foo][0] === letter) {
                let newKey = foo;
                let obj = {};
                obj[newKey] = deal[foo];
                this.setState({clicked: obj})
            }
        }
    }

    //display clicked letter in input area
    creator(e) {
        if (this.state.clicked === '') {
            console.log('clicked is empty')
            return;
        } else {
            let deal = this.state.clicked;
            for (let foo in deal) {
                let newKey = foo;
                e.currentTarget.textContent = this.state.clicked[foo][0];
                this.setState({clicked: ''})
                this.setState({Word: this.state.clicked[foo]})
                // delete this.state.clicked[foo]
                delete this.state.Cards[foo]
            }

        }
       console.log(this.state)
       console.log('word', this.state.Word)
    }

    render() {
        let className;
        //  = this.state.active ? 'highlight' : 'inactive';
            return (
                <div>
                <table id="handDisplay">
                <tbody>               
                    <tr className="letterRow">
                        {Object.keys(this.state.Cards).map((key) => (
                            <td onClick={(e) => this.recordLetter(e)} 
                            
                            className={className}>{this.state.Cards[key][0]}</td>
                        ))}
                    </tr>
                    <tr className="pointRow">
                    {Object.keys(this.state.Cards).map((key) => (
                          <td>{this.state.Cards[key][1]}</td>
                    ))}
                    </tr>
                </tbody>
    
                </table>
                <div>
                    <h3>Word(s):  
                    {this.state.round.map((key) => (
                     <p onClick={(e) => this.creator(e)} className="empty">A</p>))}
                </h3>
                    <h3>Discard:   
                    {this.state.round.map((key) => (
                          <p className="empty">A</p>))}
                    </h3>
                    <p>Points:{}</p>
                    <input type="submit" value="submit"></input><br />
                </div>
                </div>
            )
    }

}

export default Card;