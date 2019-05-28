import React from 'react';
import './App.css';


class Person extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: 10,
        }
    }

    increment = ()=>{

        this.setState({
            age: this.state.age+5,
        });

    };

    render() {
        return <div className="person">
            <div className="person-name">
                {this.props.name}
            </div>
            <div className="group">

                <div className="person-age">
                    {this.state.age}
                </div>
                <button className="add-age" onClick={this.increment}>Add</button>
            </div>

        </div>
    }
}


class App extends React.Component {
    render() {
        return <div className="container">

            <Person name="Aryan"/>
            <Person name="Hossein"/>
            <Person name="Fatemeh"/>

        </div>
    }
}


export default App;
