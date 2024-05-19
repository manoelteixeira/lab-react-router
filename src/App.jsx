import React from "react";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

/*
  Components
*/
// import Nav from "./components/common/Nav";
// import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
// import BasePage from "./pages/base-page.jsx";
import BasePage from "./pages/base-page.jsx";
import ErrorPage from "./pages/error-page.jsx";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

export default function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BasePage />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        <Route path="/staff" element={<StaffList employees={employees} />} />
        <Route
          path="/pets"
          element={<PetsList pets={pets} selected={"all"} />}
        />
        <Route
          path="/pets/cats"
          element={<PetsList pets={pets} selected={"cats"} />}
        />
        <Route
          path="/pets/dogs"
          element={<PetsList pets={pets} selected={"dogs"} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
