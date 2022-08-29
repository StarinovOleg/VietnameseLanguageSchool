import React from "react";
import { NavLink } from "react-router-dom";
import { lessons } from "../../store/static";

function Landing() {
  return (
    <>
      <NavLink
        to="/learning"
        state={{
          title: `${lessons.lesson_1.title}`,
        }}
      >
        Unit 1
      </NavLink>
      <NavLink
        to="/learning"
        state={{
          title: `${lessons.lesson_2.title}`,
        }}
      >
        Unit 2
      </NavLink>
    </>
  );
}

export default Landing;
