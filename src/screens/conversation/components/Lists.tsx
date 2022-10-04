import CardListen from "../../../components/CardListen";
import { converstation } from "../../../store/static";

export  const cardItemConversation=converstation.conversation.item.map((item)=>(
    <CardListen to={item.to} title={item.title} subtitle={item.subtitle} src={item.img}   key={item.id}
    state={{
            title: `${item.title}`,
            subtitle: `${item.subtitle}`,
          }}
    />))