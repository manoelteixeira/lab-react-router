import React from "react";
import { Link } from "react-router-dom";
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          {/* <a href="/pets/cats">See All Cats ({cats.length})</a> */}
          <Link to={"/pets/cats"}>See All Cats ({cats.length})</Link>
        </li>
        <li>
          {/* <a href="/pets/dogs">See All Dogs ({dogs.length})</a> */}
          <Link to={"/pets/dogs"}>See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
