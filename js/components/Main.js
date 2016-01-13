import React from "react";
import API from '../API';
import linkStore from '../stores/linkStore';

let _getAppState = ()=>{
  return {links : linkStore.getAll() };
};

export default class Main extends React.Component{
    
    //Babel stage 0
    static propTypes ={
        limit: React.PropTypes.number
    };
    
    static defaultProps ={
        limit: 4
    };
    
    constructor(props){
        super(props);
        
        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount(){
        API.fetchLinks();
        linkStore.on("change", ()=>{
            this.onChange();
        });
    }
    
    componentWillUnmount(){
        linkStore.removeListener("change", this.onChange());
    }
    
    
    onChange(){
        console.log("4. Onchange");
        this.setState(_getAppState());
    }
    
    
    render(){
        
        let content = this.state.links.slice(0, this.props.limit).map(link =>{
            return <li key={link._id}>
                      <a href={link.url}>{link.title}</a>
                   </li>;
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

