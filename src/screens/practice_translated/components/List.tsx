import Card from "../../../components/Card";
import { converstation } from "../../../store/static";
import CardpracticeTranslated from "../../../components/CardPracticeTranslated";
export  const cardItemPracticeTranslated=converstation.practice_translate.item.map((item)=>
<CardpracticeTranslated to={item.to} title={item.title} key={item.id}
state={{
        title: `${item.title}`,
      
      }}
/>)