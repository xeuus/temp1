import React from 'react';
import './App.css';


function Person(props) {
    return <div className="person">
        <div className="person-name">
            {props.name}
        </div>
        <div className="group">

            <div className="person-age">
                {props.age}
            </div>
            <button className="add-age" onClick={props.onClick}>Add</button>
        </div>

    </div>
}


class App extends React.Component {
    constructor(props) {
        super(props);
        // initial state
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        // change state and request re-render
        this.setState({
            counter: this.state.counter + 1,
        })
    };

    render() {
        return <div className="container">


            <Person name="Aryan" age={this.state.counter} onClick={this.increment}/>


            <Person name="Hossein" age={this.state.counter} onClick={this.increment}/>

            <Person name="Fatemeh" age={this.state.counter} onClick={this.increment}/>

        </div>
    }
}


export default App;
