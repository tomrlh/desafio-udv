import Dashboard from "components/Dashboard";
import React from "react";
import { Route, Routes } from "react-router";
import { CommonNav } from "routes/navigation/common";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={CommonNav.HOME + CommonNav.ADMIN}
        element={<Dashboard />}
      ></Route>
    </Routes>
  );
}
