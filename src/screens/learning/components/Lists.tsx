import Card from "../../../components/Card";
import { converstation } from "../../../store/static";

export  const cardItemLesson=converstation.lessons.lessons.map((item)=>
<Card to={item.to} title={item.title} subtitle={item.subtitle} src={item.img}   key={item.id}
state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
      }}
/>)