import * as types from './types';

export const setLoading = () => ({
    type:types.LOADING
});

export const setBrands = data => ({
    type:types.BRANDS,
    payload:data
});

export const setDeleteBrand = name => ({
    type:types.DELETE_BRAND,
    payload:name
});

export const setAddBrand = message => ({
    type:types.ADD_BRAND,
    payload:message
});

export const setBrandError = error => ({
    type:types.BRAND_ERROR,
    payload:error
});

export const setBrand = data => ({
    type:types.BRAND,
    payload:data
});