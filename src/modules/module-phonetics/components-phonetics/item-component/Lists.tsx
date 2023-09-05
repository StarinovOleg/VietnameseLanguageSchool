import Card from "./Card";
import { store_phonetics } from "../../store/store-phonetics";
import { useLocationDisplayList } from "../../../../hooks/useLocationDisplayList";

const Lists = () => {
  const cardItemLesson = store_phonetics.phonetics.lessons.map((item) => (
    <Card
      title={item.title}
      src={item.img}
      key={item.id}
      link="phonetics"
      state={{
        title: `${item.title}`,
        array_data: `${JSON.stringify(item.array_data)}`,
      }}
    />
  ));
  const listItems = useLocationDisplayList(cardItemLesson, 8);

  return <>{listItems}</>;
};

export default Lists;
