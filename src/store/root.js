import {combineReducers} from 'redux';

import userReducer from './user';
import generalReducer from './general';
import brandsReducer from './brands';
import vehiclesReducer from './vehicles';
import ordersReducer from './orders';

export default combineReducers({
    user:userReducer,
    general:generalReducer,
    brands:brandsReducer,
    vehicles:vehiclesReducer,
    orders:ordersReducer
});