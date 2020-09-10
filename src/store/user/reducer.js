import * as types from './types';

const initial_state = {
    loading:false,
    error:'',
    token:'',
    message:'',
    user:{}
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true,
                message:'',
                error:'',
            };

        case types.ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };

        case types.TOKEN:
            return {
                ...state,
                loading:false,
                token:action.payload,
                error:'',
                message:''
            };

        case types.MESSAGE:
            return {
                ...state,
                loading:false,
                message:action.payload,
                error:''
            };

        case types.USER:
            return {
                ...state,
                loading:false,
                user:action.payload
            };

        case types.LOGOUT:
            return {
                ...state,
                loading:false,
                error:'',
                token:'',
                message:'',
                user:{}
            }
        
        default:
            return {
                ...state
            }
    }
}