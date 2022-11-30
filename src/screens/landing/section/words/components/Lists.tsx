import Card from "./Card";
import { converstation } from "../../../../../store/static";

export const cardItemLesson = converstation.words.lessons.map((item) => (
  <Card
    to={item.to}
    title={item.title}
    subtitle={item.subtitle}
    src={item.img}
    key={item.id}
    state={{
      title: `${item.title}`,
      subtitle: `${item.subtitle}`,
    }}
  />
));
