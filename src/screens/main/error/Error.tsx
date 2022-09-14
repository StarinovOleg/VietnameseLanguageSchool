import React from "react";
import H1 from "../../../ui-library/H1";
import Button from "../../../ui-library/Button";
import { useNavigate, useLocation } from "react-router-dom";
function Error(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  }) {
  const navigate = useNavigate();
  return (
    <div className="text-center bg-white p-4 border-solid rounded-xl p-4 xl mx-4">
    <H1 children="Chose Test Page" />
    <Button
      onClick={() =>
        navigate("/landing", {
          replace: true,
        })
      }
      btnprimary="btn-primary"
    >
      Test Page
    </Button>
  </div>
  );
}

export default Error;