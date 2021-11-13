import {React, useEffect} from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    useEffect(() => console.log(isAuth));
    return (
        <Route {...rest} 
        render={(props) => 
        isAuth ?
        <Component {...props} /> : <Redirect to="/signin" />
    } />
    );
};

export default PrivateRoute
