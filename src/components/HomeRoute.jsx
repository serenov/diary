import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./sub/Home";
import Explore from "./sub/Explore";
import Profile from "./sub/Profile";

export default function HomeRoute() {
  return (
    <Routes>
      <Route index path="/Home" element={<Home />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="*" element={<p>Page not Found</p>} />
    </Routes>
  );
}
