import React, { useState } from "react";
import { store_grammar } from "../store/store-grammar";
import GridSection from "../../../screens/main/section/GridSection";
import Link from "../../../ui-library/Link";
import Lists from "../components-grammar/item-component/Lists";
import Section from "../../../screens/main/section/Section";
import { converstation } from "../../../store/static";

function GrammarLesson(props: { id?: string }) {
  return (
    <Section>
      <GridSection
        title={store_grammar.main.grammar.block.textTitle}
        fontcolorsecondary="text-orange-800"
        id={props.id}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 ">
          <Lists />
        </div>

        <Link
          children={converstation.landing.continue}
          align="text-right"
          secondary_color="text-orange-800"
          state={{
            title: `${store_grammar.main.grammar.block.textTitle}`,
          }}
        />
      </GridSection>
    </Section>
  );
}

export default GrammarLesson;
