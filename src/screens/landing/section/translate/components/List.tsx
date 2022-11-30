import { converstation } from "../../../../../store/static";
import CardpracticeTranslated from "./CardPracticeTranslated";
export const cardItemPracticeTranslated =
  converstation.practice_translate.item.map((item) => (
    <CardpracticeTranslated
      to={item.to}
      title={item.title}
      key={item.id}
      state={{
        title: `${item.title}`,
      }}
    />
  ));
