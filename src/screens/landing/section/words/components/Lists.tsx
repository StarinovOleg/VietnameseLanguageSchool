import Card from "./Card";
import { converstation } from "../../../../../store/static";
import { chooseRandom } from "../../../../words/components/random_words";
import { shuffle } from "../../../../../services/algoritm_fisher_shuffle";

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
      array_data: `${JSON.stringify(chooseRandom(item.array_data, 10))}`,
    }}
  />
));
