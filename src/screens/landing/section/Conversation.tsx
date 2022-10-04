import React from "react";
import { converstation } from "../../../store/static";
import CardListen from "../../../components/CardListen";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";
import { cardItemConversation } from "../../conversation/components/Lists";

function Conversation() {
  return (
  <Section title={converstation.conversation.title}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {cardItemConversation.slice(0, 6)}
    </div>
    <div className="m-10 relative">
      <Link to='/training' children={converstation.landing.continue} align='align-right-side'
        state={{
          title: `${converstation.conversation.title}`,
        }}
      />
    </div>
  </Section>
  );
}

export default Conversation;