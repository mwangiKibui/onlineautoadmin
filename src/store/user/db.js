import axios from 'axios';
import * as actions from './actions';

let url;

if(process.env.NODE_ENV === "development"){
    url = `http://localhost:5000/api/v1/online-auto`;
}else if(process.env.NODE_ENV === "production"){
    url = `https://client-jobs.xyz/api/v1/online-auto`;
};

//signup
export const signup = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/admin/signup`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(result => {
        let isSuccessful = result.data.success;
        if(!isSuccessful) return dispatch(actions.setError(result.data.message));
        return dispatch(actions.setMessage(result.data.message))
    })

    .catch(console.log);
};

//login
export const login = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/admin/login`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(result => {
        let isSuccessful = result.data.success;
        if(!isSuccessful) return dispatch(actions.setError(result.data.message));
        return dispatch(actions.setToken(result.data.message));
    })

    .catch(console.log);
};

//decode
export const decode = token => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/admin/decode`,{
        headers:{'Authorization':`Bearer ${token}`}
    })

    .then(result => dispatch(actions.setUser(result.data.message)))

    .catch(console.log);
};

//logout
export const logout = () => dispatch => {

    dispatch(actions.setLoading());

    return dispatch(actions.setLogout());
    
};