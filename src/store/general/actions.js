import * as types from './types';

export const setLoading = () => {
    return {
        type:types.LOADING
    }
};

export const setData = data => {
    return {
        type:types.DATA,
        payload:data
    }
};