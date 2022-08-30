import React, { useContext } from "react";
import SchoolContext from "../../store/state";
import { useLocation } from "react-router-dom";
import CorrectAnswer from "../../components/CorrectAnswer";
import NotCorrectAnswer from "../../components/NotCorrectAnswer";
import { useNavigate } from "react-router-dom";
import H1 from "../../ui-library/H1";
import Button from "../../ui-library/Button";
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
    window.location.reload();
  };
  return (
    <div className="text-left bg-white p-4 border-solid rounded-xl m-4">
      <H1>Congratulation you done {locationState.title}</H1>
      <CorrectAnswer children={context.countPositive} />
      <NotCorrectAnswer children={context.countNegative} />
      <Button onClick={redirectEndScreen} btnprimary="btn-primary">
        Test Page
      </Button>
    </div>
  );
}

export default EndScreen;
