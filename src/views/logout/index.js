import React,{useEffect} from 'react';

//third-party
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//components
import {logout} from '../../store/user';

const Logout = () => {

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(logout());
    },[dispatch])

    return (
        <Redirect to="/auth/login" />
    )
};

export default Logout;