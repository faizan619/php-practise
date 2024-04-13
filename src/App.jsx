import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>

      <div className="flex grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
