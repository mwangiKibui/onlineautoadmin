import * as types from './types';

export const setLoading = () => ({
    type:types.LOADING
});

export const setVehicles = data => ({
    type:types.VEHICLES,
    payload:data
});

export const setDeleteVehicle = slug => ({
    type:types.DELETE_VEHICLE,
    payload:slug
});

export const setAddVehicle = message => ({
    type:types.ADD_VEHICLE,
    payload:message
});

export const setError = message => ({
    type:types.VEHICLE_ERROR,
    payload:message
});

export const setVehicle = data => ({
    type:types.VEHICLE,
    payload:data
});