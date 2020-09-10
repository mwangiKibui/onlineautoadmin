import axios from 'axios';
import * as actions from './actions';

let url;
if(process.env.NODE_ENV === "development"){
    url = `http://localhost:5000/api/v1/online-auto/general`
}else if(process.env.NODE_ENV === "production"){
    url = `https://client-jobs.xyz/api/v1/online-auto/general`
};

//fetching data
export const fetchGenerals = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch`)

    .then(res => dispatch(actions.setData(res.data.message)))

    .catch(console.log);
}