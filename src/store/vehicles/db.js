import axios from 'axios';
import * as actions from './actions';

let url;
if(process.env.NODE_ENV === "development"){
    url = 'http://localhost:5000/api/v1/online-auto/vehicle'
}else if(process.env.NODE_ENV === "production"){
    url = `https://client-jobs.xyz/api/v1/online-auto/vehicle`;
};

//fetching vehicles
export const fetchVehicles = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch`)

    .then(res => dispatch(actions.setVehicles(res.data.message)))

    .catch(console.log);
};

//deleting a vehicle
export const deleteVehicle = slug => async dispatch => {
    dispatch(actions.setLoading());

    await axios.delete(`${url}/delete/${slug}`,{
        headers:{'content-type':'application/json'}
    })

    .then( () => dispatch(actions.setDeleteVehicle(slug)))

    .catch(console.log);
};

//adding a vehicle
export const addVehicle = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/add`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(res => {

        let isSuccessful = res.data.success;
        if(!isSuccessful) return dispatch(actions.setError(res.data.message));

        return dispatch(actions.setAddVehicle(res.data.message))
    })

    .catch(console.log);
}