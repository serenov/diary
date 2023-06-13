import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
import HomeRoute from "./components/HomeRoute";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div id="APP" className="h-[100dvh] flex flex-col">
      <Routes>
        <Route index path="/*" element={<HomeRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
