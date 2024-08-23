import React from "react";
import "./css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1 className="header">404</h1>
      <p className="message">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
