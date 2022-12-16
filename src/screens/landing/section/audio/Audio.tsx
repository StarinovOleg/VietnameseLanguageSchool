import { useToggle } from "../../../../hooks/useToggle";
import { converstation } from "../../../../store/static";
import GridSection from "../../../main/section/GridSection";
import Link from "../../../../ui-library/Link";
import List from "./components/Lists";
import SupportWindow from "../../../../components/SupportWindow";
import Section from "../../../main/section/Section";

const children_header = (
  <img
    src={converstation.audio.section_img}
    alt="icon support"
    className="w-12 h-12 ml-4 mr-4 mt-4 mb-4"
  />
);
function Audio(props: { id?: string }) {
  const [hover, setHover] = useToggle(false);

  return (
    <Section>
      <GridSection
        title={converstation.audio.title}
        fontcolorsecondary="text-lime-800"
        id={props.id}
        children_header={children_header}
        onClick={setHover}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
          {hover && (
            <SupportWindow
              position={"absolute"}
              text={converstation.support_window.text_audio}
              color="text-lime-800"
              img={converstation.support_window.img_audio}
              shadowcolor="shadow-lime-500"
              onClick={setHover}
            />
          )}
          <List />
        </div>

        <Link
          children={converstation.landing.continue}
          align="text-right"
          secondary_color="text-lime-800"
          state={{
            title: `${converstation.audio.title}`,
          }}
        />
      </GridSection>
    </Section>
  );
}

export default Audio;
