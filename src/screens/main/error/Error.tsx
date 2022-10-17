import React from "react";
import H1 from "../../../ui-library/H1";
import Button from "../../../ui-library/Button";
import { useNavigate, useLocation } from "react-router-dom";
import  {converstation}  from "../../../store/static";
import BodyPractice from "../body/body_practice";
function Error() {
  const navigate = useNavigate();
  return (
    <BodyPractice>
  
    <H1 children={converstation.error.title} />
    <Button
      onClick={() =>
        navigate("/landing", {
          replace: true,
        })
      }
      btnprimary="btn-primary"
    >
    {converstation.button.button_name}
    </Button>
  
  </BodyPractice>
  );
}

export default Error;