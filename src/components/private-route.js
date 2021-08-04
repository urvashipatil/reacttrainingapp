import React from "react";
import { Redirect } from "react-router-dom";

const authentication = {
  isLoggedIn: true,
};
export default function PrivateRoute({ children }) {
  if (authentication.isLoggedIn) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}
