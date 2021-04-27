import React from "react";
import Dashboard from "components/Dashboard";
import Login from "components/Login";
import { Route, Routes } from "react-router";

export default function index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
