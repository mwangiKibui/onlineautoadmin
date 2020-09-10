import * as types from './types';

const initial_state = {
    loading:false,
    brands:[],
    message:'',
    error:'',
    brand:{}
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true,
                message:'',
                error:''
            };
        case types.BRANDS:
            return {
                ...state,
                loading:false,
                brands:action.payload
            };
        case types.DELETE_BRAND:
            return {
                ...state,
                loading:false,
                brands:state.brands.filter(brand => brand.name !== action.payload)
            };
        case types.ADD_BRAND:
            return {
                ...state,
                loading:false,
                message:action.payload
            };
        case types.BRAND_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        case types.BRAND:
            return {
                ...state,
                loading:false,
                brand:action.payload
            }
        default:
            return {
                ...state
            }

    }
}