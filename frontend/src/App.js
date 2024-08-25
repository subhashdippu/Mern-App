import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
      <LogIn />
      <ErrorPage />
    </div>
  );
};

export default App;
