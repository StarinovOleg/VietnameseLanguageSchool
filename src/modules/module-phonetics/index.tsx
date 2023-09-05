import { useLocation } from "react-router-dom";
import { store_phonetics } from "../module-phonetics/store/store-phonetics";
import H1 from "../../ui-library/H1";
import { useDisplayWords } from "../../hooks/useDisplayWords";
import BodyPractice from "../../screens/main/body/body_practice";
import Table from "./components-phonetics/Table";
import Error from "../../screens/main/error/Error";

interface location {
  title: string;
  array_data: string;
}

function PhoneticsIndex() {
  const location = useLocation();
  const state = location.state as location;
  const arr = useDisplayWords(state);
  return (
    <>
      {arr?.length !== 0 && state?.title ? (
        <BodyPractice>
          <div
            className="text-4xl my-4 p-10"
            style={{ whiteSpace: "pre-wrap" }}
          >
            <>
              <H1 children={state.title} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
                {arr?.map((display, index) => (
                  <div key={display.id}>
                    <Table k={display.text} v={display.audio} />
                  </div>
                ))}
              </div>
            </>
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default PhoneticsIndex;
