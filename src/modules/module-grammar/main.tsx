import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import BodyPractice from "../../screens/main/body/body_practice";

import Section from "../../screens/main/section/Section";
import H1 from "../../ui-library/H1";
interface location {
  title: string;
}
function Main(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const location = useLocation();
  const state = location.state as location;
  return (
    <BodyPractice>
      <H1 children={state?.title} />
      <div className="text-left mx-[1%] lg:leading-[3rem] md:leading-[3rem] leading-[3rem] text-xs lg:text-2xl md:text-2xl">
        {props.children}
      </div>
    </BodyPractice>
  );
}

export default Main;
