import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import Error from "../main/error/Error";
import DisplayBlock from "./components/DisplayBlock";
import Table from "./components/Table";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";
import { useDisplayWords } from "../../hooks/useDisplayWords";
interface location {
  title: string;
  array_data: string;
}
const tones = Object.entries(converstation.audio.lessons[5].array_data).map(
  ([k, v]) => <Table k={k} v={v} key={v} />
);

function AudioIndex() {
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
              {state.title !== converstation.audio.lessons[5].title ? (
                <>
                  {arr?.map((display, index) => (
                    <DisplayBlock
                      key={index}
                      word={display.text}
                      audio={display.audio}
                    />
                  ))}
                </>
              ) : (
                <>
                  <H1 children={state.title} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
                    {tones}
                  </div>
                </>
              )}
            </>
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default AudioIndex;
