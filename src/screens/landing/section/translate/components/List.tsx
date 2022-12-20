import { converstation } from "../../../../../store/static";
import CardpracticeTranslated from "./CardPracticeTranslated";
import { useLocationDisplayList } from "../../../../../hooks/useLocationDisplayList";

const List = () => {
  const cardItemPracticeTranslated = converstation.translate.item.map(
    (item) => (
      <CardpracticeTranslated
        title={item.title}
        key={item.id}
        state={{
          title: `${item.title}`,
          array_data: `${JSON.stringify(item.array_data)}`,
          array_data_vietnamese: `${JSON.stringify(
            item.array_data_vietnamese
          )}`,
        }}
      />
    )
  );
  const listItems = useLocationDisplayList(cardItemPracticeTranslated, 8);
  return <>{listItems}</>;
};

export default List;
