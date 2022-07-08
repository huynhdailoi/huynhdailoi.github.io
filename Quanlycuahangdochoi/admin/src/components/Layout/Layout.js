import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./../Header/Header";
import Nav from "../Nav/Nav";
import routeJs from "../../routeJs";

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="row g-0 gx-0">
          <div className="col-2">
            <Nav />
          </div>
          <div className="col bg-white">
            <Header />
            <Routes>
              {routeJs.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
