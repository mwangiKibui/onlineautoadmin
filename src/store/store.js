import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import root from './root';


function load(){
    let state;
    try {
        state = localStorage.getItem('state');
        if(typeof(state) === "string"){
            state = JSON.parse(state);
        }
    }catch(err){
        console.log(err);
    };
    return state || undefined;
};

const store = createStore(root,load(),composeWithDevTools(applyMiddleware(thunk)));

function save(){
    try {
        localStorage.setItem('state',JSON.stringify(store.getState()));
    }catch(err){
        console.log(err);
    }
};

store.subscribe( () => save() );

export default store;