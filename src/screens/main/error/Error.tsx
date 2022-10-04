import React from "react";
import H1 from "../../../ui-library/H1";
import Button from "../../../ui-library/Button";
import { useNavigate, useLocation } from "react-router-dom";
import  {converstation}  from "../../../store/static";
function Error() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-4 xl mx-4 ">
    <div className="bg-white border-solid rounded-xl h-screen">
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
  </div>
  </div>
  );
}

export default Error;