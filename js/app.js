import React from "react";
import ReactDOM from "react-dom";
import Hello from './components/Main';
import Relay from 'react-relay';


/*
let Hello = React.createClass({
    render(){
        return <h3>Hello ES6</h3>;
    }
});
*/




ReactDOM.render(<Hello limit={3} />, document.getElementById('react'));

console.log(
    Relay.QL`
    query Test{
        links {
            title
        }
    }`
);