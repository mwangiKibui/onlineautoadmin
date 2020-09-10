import * as types from './types';

const initial_state = {
    loading:false,
    data:{}
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true
            };

        case types.DATA:
            return {
                ...state,
                loading:false,
                data:action.payload
            };

        default:
            return {
                ...state
            }
    }
};