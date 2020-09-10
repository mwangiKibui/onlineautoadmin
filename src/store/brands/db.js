import axios from 'axios';
import * as actions from './actions';

let url;
if(process.env.NODE_ENV === "development"){
    url = "http://localhost:5000/api/v1/online-auto/brand"
}else if(process.env.NODE_ENV === "production"){
    url = "https://client-jobs.xyz/api/v1/online-auto/brand"
};

//fetching brands
export const fetchBrands = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch`)

    .then(data => dispatch(actions.setBrands(data.data.message)))

    .catch(console.log);
};

//deleting a brand
export const deleteBrand = name => async dispatch => {

    dispatch(actions.setLoading());

    await axios.delete(`${url}/delete/${name}`)

    .then( () => dispatch(actions.setDeleteBrand(name)))

    .catch(console.log);
    
};

//adding a brand
export const addBrand = data => async dispatch => {

    dispatch(actions.setLoading());

    await axios.post(`${url}/add`,data,{
        headers:{'content-type':'application/json'}
    })

    .then( (res) => {

        let isSuccessful = res.data.success;
        if(!isSuccessful) return dispatch(actions.setBrandError(res.data.message));
         
        return dispatch(actions.setAddBrand(res.data.message)) 

    })

    .catch(console.log);

};

//fetching brand
export const fetchBrand = name => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/get/${name}`)

    .then(res => dispatch(actions.setBrand(res.data.message)))

    .catch(console.log);
};