import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import routeJs from "../../../routeJs";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          {routeJs.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
        <Footer />
      </div>
    );
  }
}
