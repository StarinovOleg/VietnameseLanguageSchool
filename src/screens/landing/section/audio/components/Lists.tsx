import CardAudio from "./CardAudio";
import { converstation } from "../../../../../store/static";
import { useLocationDisplayList } from "../../../../../hooks/useLocationDisplayList";

const Lists = () => {
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
  const listItems = useLocationDisplayList(cardItemLesson, 6);
  return <>{listItems}</>;
};

export default Lists;
