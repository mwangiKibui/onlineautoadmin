import * as types from './types';

export const setLoading = () => ({
    type:types.LOADING
});

export const setOrders = data => ({
    type:types.ORDERS,
    payload:data
})