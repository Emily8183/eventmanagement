import React from "react";
import { Homepage } from "./layouts/HomePage/Homepage";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { SearchEventsPage } from "./layouts/SearchEventsPage/SearchEventsPage";
import { EventCheckoutPage } from "./layouts/EventCheckoutPage/EventCheckoutPage";

export const App = () => {
  const customAuthHandler = () => {
    history.push("/login");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* to keep the footer stay on bottom of each page */}
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          {/* <Switch> wraps the <Route> components. */}

          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/search">
            <SearchEventsPage />
          </Route>

          <Route path="/checkout/:eventId">
            {/* : 表示路由参数的占位符，用于捕获 URL 中的动态部分。当你使用 : 后跟一个字符串时，这个字符串就会被作为路由参数的名称，并且匹配到的 URL 中对应位置的部分会被作为参数的值传递给组件。 */}
            <EventCheckoutPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

// after updating the app function by using the arrow function, dont forget to update index.tsx
