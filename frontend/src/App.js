import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import About from "./components/About";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LogIn />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <ErrorPage /> */}
    </div>
  );
};

export default App;
