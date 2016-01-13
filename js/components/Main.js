import React from "react";
import Relay from 'react-relay';

import Link from "./Link";

class Main extends React.Component{
    
    //Babel stage 0
    static propTypes ={
        limit: React.PropTypes.number
    };
    
    static defaultProps ={
        limit: 4
    };
    
    constructor(props){
        super(props);
    }
  
    render(){
        
        let content = this.props.store.links.slice(0, this.props.limit).map(link =>{
            return <Link key={link._id} link={link} />;
        });
        
        return (
        
        <div> 
            <h3>Links</h3>
            <ul>
                {content}
            </ul>
        </div>
        
        )
    }
}

//Declare the data requierement for this component
Main = Relay.createContainer(Main, {
    fragments: {
       store: () => Relay.QL`
        fragment on Store {
            links{
                _id,
                ${Link.getFragment('link')}
            }
        }
       `
    }
});

export default Main;