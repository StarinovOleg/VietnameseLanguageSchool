import React from "react";
import H1 from "../../../ui-library/H1";
import Button from "../../../ui-library/Button";
import { useNavigate } from "react-router-dom";
import { converstation } from "../../../store/static";
import BodyPractice from "../body/body_practice";
import H2 from "../../../ui-library/H2";
function Error() {
  const navigate = useNavigate();
  return (
    <BodyPractice>
      <H1 children={converstation.error.title} />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 content">
        <div>
          <div className="text-left p-10">
            <H2
              children={converstation.error.subtitle}
              fontsizeprimary="h2-font-size-primary"
              fontfamilysecondary="font-sans"
              fontcolorsecondary="text-stone-500"
            />
          </div>
          <Button
            onClick={() =>
              navigate("/landing", {
                replace: true,
              })
            }
            btnprimary="btn-primary text-white"
          >
            {converstation.button.button_name}
          </Button>
        </div>
        <div>
          <img
            src={converstation.error.img}
            alt="logo"
            className=" md:mt-auto md:mb-auto w-1/2 ml-auto mr-auto"
          />
        </div>
      </div>
    </BodyPractice>
  );
}

export default Error;
