import React from "react";
import API from '../API';

class Main extends React.Component{
    componentDidMount(){
        API.fetchLinks();
    }
    
    
    render(){
        return <h3> Hello React with ES6 </h3>
    }
}

export default Main;