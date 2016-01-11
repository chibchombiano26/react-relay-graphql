import {post} from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks(){
        console.log('1. Api');
        post('/graphql',{
            query: `{
                  links{
                    _id,
                    title,
                    url
                  }
                }`
        }).done(resp=>{
            ServerActions.receiveLinks(resp.data.links);
        });
    }
};


export default API;