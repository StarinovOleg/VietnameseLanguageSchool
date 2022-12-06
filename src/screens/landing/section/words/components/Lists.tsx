import Card from "./Card";
import { converstation } from "../../../../../store/static";
import { chooseRandom } from "../../../../words/components/random_words";
import { useLocation } from "react-router-dom";

const Lists = () => {
  const location = useLocation();

  const cardItemLesson = converstation.words.lessons.map((item) => (
    <Card
      to={item.to}
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
  return (
    <>
      {location.pathname === "/landing"
        ? cardItemLesson.slice(0, 8)
        : cardItemLesson}
    </>
  );
};

export default Lists;
