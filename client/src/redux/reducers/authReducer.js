import React from 'react';
import * as Types from "../actions/types";
const initstate={
    user:JSON.parse(localStorage.getItem("user")),
    token:null,
    isAuth:localStorage.getItem("isAuth") === "true" ? true : false,
    errors:null,
}
const authReducer = (state=initstate,{type,payload}) => {
switch (type) {
    case Types.Register:
    case Types.Signup:
        localStorage.setItem("auth-token", payload.token);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("user", JSON.stringify(payload.user));
        return {
            ...state,
            user: payload.user,
            token: payload.token,
            errors: null,
            isAuth: true,
        };
        case Types.Signup_fail:
        case Types.Register_fail:
            
            return { ...state, errors: payload, isAuth: false};
            case Types.logout:
                localStorage.clear()
                return{
                    user: null,
                    token: null,
                    isAuth: false,
                    errors: null,
                };
    default:
        return state;
        
}
};

export default authReducer;
