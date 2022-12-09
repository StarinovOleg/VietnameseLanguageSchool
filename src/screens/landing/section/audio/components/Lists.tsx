import CardAudio from "./CardAudio";
import { converstation } from "../../../../../store/static";

export const cardItemConversation = converstation.audio.lessons.map((item) => (
  <CardAudio
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
