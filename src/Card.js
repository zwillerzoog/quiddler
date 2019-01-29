
import React from "react";
import Deal from './Deal'
import Letters from './Letters';


function insertLetters() {
    // let row = document.getElementsByClassName('.letterRow');
    // let x = row.insertCell(-1)
    // x.innerHTML="i'm neeeww"
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: {},
            Word: {},
            round: 3,
            clicked: ''
        }
    }

    componentDidMount() {
        console.log('mounted')
        insertLetters()
    }

    clicker(r){
        // e.preventDefault();
        console.log(this.state)
        this.setState({clicked: r.currentTarget.textContent})
    }

    render() {
        let round = this.state.round;
        let deal = new Object();
        if (round > 0) {
            for (let i = 0; i < round; i++) {
               let random = Math.floor(Math.random() * Object.keys(Letters).length);
               this.state.Cards[Object.keys(Letters)[random]] = Letters[Object.keys(Letters)[random]];
            }
        }



        console.log(this.state)
            return (
                <div>
                <table id="handDisplay">
                <tbody>               
                    <tr className="letterRow">
                    {Object.keys(this.state.Cards).map((r) => (
                          <td onClick={() => this.clicker()}>{r}</td>
                    ))}
                        
                    </tr>
                    <tr className="pointRow">
                    {Object.values(this.state.Cards).map((r) => (
                          <td>{r}</td>
                    ))}
                    </tr>
                </tbody>
    
                </table>
                <form >
                    Words:  {'___ '.repeat(round)}<br />
                    Discard:   {'___ '.repeat(round)}<br />
                    <p>Points:{}</p>
                    <input type="submit" value="submit"></input><br />
                </form>
                </div>
            )
    }

}

export default Card;