import React, { useContext } from "react";
import SchoolContext from "../../store/state";
import { useLocation } from "react-router-dom";
import CorrectAnswer from "../../components/CorrectAnswer";
import NotCorrectAnswer from "../../components/NotCorrectAnswer";
import { useNavigate } from "react-router-dom";
import H1 from "../../ui-library/H1";
import Button from "../../ui-library/Button";
import  {converstation}  from "../../store/static";
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
    <div className="p-4 bg-indigo-50">
    <div className="text-left bg-white p-4 border-solid rounded-xl m-4 h-screen">
      <H1>{converstation.end_screen.title} {locationState.title}</H1>
      <CorrectAnswer children={context.countPositive} />
      <NotCorrectAnswer children={context.countNegative} />
      <Button onClick={redirectEndScreen} btnprimary="btn-primary">
        {converstation.button.button_name}
      </Button>
    </div>
    </div>
  );
}

export default EndScreen;
