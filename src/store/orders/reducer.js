import * as types from './types';

const initial_state = {
    loading:false,
    orders:[]
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true
            };
        case types.ORDERS:
            return {
                ...state,
                loading:false,
                orders:action.payload
            };
        default:
            return {
                ...state
            }
    }
}