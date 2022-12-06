import React, { useContext } from "react";
import SchoolContext from "../../store/state";
import { useLocation } from "react-router-dom";
import CorrectAnswer from "../../components/CorrectAnswer";
import NotCorrectAnswer from "../../components/NotCorrectAnswer";
import { useNavigate } from "react-router-dom";
import H1 from "../../ui-library/H1";
import Button from "../../ui-library/buttons/Button";
import { converstation } from "../../store/static";
import BodyPractice from "../main/body/body_practice";
interface locationStateProps {
  title: string;
}
function EndScreen() {
  const context = useContext(SchoolContext);
  const location = useLocation();
  const locationState: locationStateProps =
    location.state as locationStateProps;
  const navigate = useNavigate();
  const redirectEndScreen = () => {
    navigate("/landing", {
      replace: true,
    });
  };
  return (
    <BodyPractice>
      <div className="text-left h-screen md:h-auto lg:h-auto">
        <H1>
          {converstation.end_screen.title} {locationState.title}
        </H1>
        <CorrectAnswer children={context.countPositive} />
        <NotCorrectAnswer children={context.countNegative} />
        <Button onClick={redirectEndScreen}>
          {converstation.button.button_name}
        </Button>
        <img
          src={converstation.end_screen.picture}
          className="mr-auto ml-auto w-6/12"
        />
      </div>
    </BodyPractice>
  );
}

export default EndScreen;
