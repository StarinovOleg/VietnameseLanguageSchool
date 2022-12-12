import CardAudio from "./CardAudio";
import { converstation } from "../../../../../store/static";
import { useLocation } from "react-router-dom";

const Lists = () => {
  const location = useLocation();

  const cardItemLesson = converstation.audio.lessons.map((item) => (
    <CardAudio
      title={item.title}
      subtitle={item.subtitle}
      src={item.img}
      key={item.id}
      state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
        array_data: `${JSON.stringify(item.array_data)}`,
      }}
    />
  ));
  return (
    <>
      {location.pathname === "/landing"
        ? cardItemLesson.slice(0, 6)
        : cardItemLesson}
    </>
  );
};

export default Lists;
