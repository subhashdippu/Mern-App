import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
      <ErrorPage />
    </div>
  );
};

export default App;
