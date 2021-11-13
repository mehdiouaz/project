import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Store from "./pages/Store";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/PrivateRoute";
import UploadProductPage from "./components/UploadProductPage/UploadProductPage";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/store" component={Store}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/consulting" component={Consulting}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/product/upload" component={UploadProductPage}></Route>
          <Route path="/contact" component={Contact}></Route>
          <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
