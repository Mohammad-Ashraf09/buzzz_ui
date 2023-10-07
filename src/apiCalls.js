import axios from "axios";
import { REACT_APP_BASE_URL } from './config/keys';

export const loginCall = async (userData, dispatch) =>{
    dispatch({ type: "LOGIN_START" });
    try{
        const res = await axios.post(`${REACT_APP_BASE_URL}/auth/login`, userData);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    }
    catch(err){
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};