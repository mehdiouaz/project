import React from "react";
import axios from "axios";
import * as type from "./types";

export const register = (data, history)=>async(dispatch)=>{
try {
    const res = await axios.post("http://localhost:5000/user/addUser", data);
    console.log(res);
    dispatch({
        type: type.Register,
        payload: res.data,
    });
    history.push("/profile");
    console.log(res.data);
} catch (error) {
  dispatch({
    type: type.Register_fail,
    payload: error?.response.data,
  });
}
};


export const signup = (data, history)=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:5000/user/signin", data);
        console.log(res);
        dispatch({
            type: type.Signup,
            payload: res.data,
        });
        history.push("/profile");
        console.log(res.data);
    } catch (error) {
      dispatch({
        type: type.Signup_fail,
        payload: error?.response.data,
      });
    }
    };

    export const logout = (history)=>async(dispatch) => {
    try {
      dispatch({
        type: type.logout,
      });
      history.puch("signup");
      history.push("register");
    } catch (error) {
      console.log(error);
    }
    }