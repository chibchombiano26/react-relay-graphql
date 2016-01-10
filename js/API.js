import {get} from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks(){
        console.log('api');
        get('/data/links').done(resp=>{
            ServerActions.receiveLinks(resp);
        });
    }
};


export default API;