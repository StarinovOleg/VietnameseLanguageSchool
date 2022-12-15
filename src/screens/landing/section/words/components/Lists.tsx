import Card from "./Card";
import { converstation } from "../../../../../store/static";
import { chooseRandom } from "../../../../words/components/random_words";
import { useLocationDisplayList } from "../../../../../hooks/useLocationDisplayList";

const Lists = () => {
  const cardItemLesson = converstation.words.lessons.map((item) => (
    <Card
      title={item.title}
      subtitle={item.subtitle}
      src={item.img}
      key={item.id}
      state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
        array_data: `${JSON.stringify(chooseRandom(item.array_data, 10))}`,
      }}
    />
  ));
  const listItems = useLocationDisplayList(cardItemLesson, 8);

  return <>{listItems}</>;
};

export default Lists;
