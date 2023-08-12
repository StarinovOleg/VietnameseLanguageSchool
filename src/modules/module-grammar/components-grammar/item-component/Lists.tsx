import Card from "./Card";
import { store_grammar } from "../../store/store-grammar";
import { useLocationDisplayList } from "../../../../hooks/useLocationDisplayList";

const Lists = () => {
  const cardItemLesson = store_grammar.grammar.lessons.map((item) => (
    <Card
      title={item.title}
      src={item.img}
      key={item.id}
      link={item.link}
      state={{
        title: `${item.title}`,
      }}
    />
  ));
  const listItems = useLocationDisplayList(cardItemLesson, 8);

  return <>{listItems}</>;
};

export default Lists;
