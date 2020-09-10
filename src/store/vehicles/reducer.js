import * as types from './types';

const initial_state = {
    loading:false,
    vehicles:[],
    message:'',
    error:'',
    vehicle:{}
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true,
                message:''
            };
        case types.VEHICLES:
            return {
                ...state,
                loading:false,
                vehicles:action.payload
            };
        case types.DELETE_VEHICLE:
            return {
                ...state,
                loading:false,
                vehicles:state.vehicles.filter(vehicle => vehicle.slug !== action.payload)
            };
        case types.ADD_VEHICLE:
            return {
                ...state,
                loading:false,
                message:action.payload
            };
        case types.VEHICLE_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        case types.VEHICLE:
            return {
                ...state,
                loading:false,
                vehicle:action.payload
            }
        default:
            return {
                ...state
            }
    }
}