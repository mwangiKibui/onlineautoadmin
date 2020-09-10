import * as types from './types';

export const setLoading = () => {
    return {
        type:types.LOADING
    }
};

export const setError = data => {
    return {
        type:types.ERROR,
        payload:data
    }
};

export const setMessage = data => {
    return {
        type:types.MESSAGE,
        payload:data
    }
};

export const setToken = token => {
    return {
        type:types.TOKEN,
        payload:token
    }
};

export const setUser = data => {
    return {
        type:types.USER,
        payload:data
    }
};

export const setLogout = () => {
    return {
        type:types.LOGOUT
    }
}