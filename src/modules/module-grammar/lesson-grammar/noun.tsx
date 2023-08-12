import React from "react";
import Main from "../main";

export default function Noun() {
  return (
    <Main>
      <div>
        <div>1. Сountable nouns:</div>
        <div>
          Nouns that can be counted. Countable nouns: a Animate nouns;
          b.Inanimate nouns.
        </div>
        <div>
          <p>
            - <span className="font-bold">a. Animate nouns </span>
          </p>
        </div>
        <div>mèo - cat</div>
        <div>Hai con mèo - Two cats</div>
        <div>
          <p>
            - <span className="font-bold">b. Inanimate nouns </span>
          </p>
        </div>
        <div>bút - pen</div>
        <div>Hai cái bút - Two pens</div>
      </div>
      <div>
        <div>Singular and plural nouns:</div>
        <div>
          <p className="font-bold">
            In Vietnamese, nouns do not have a singular or plural form.There is
            a special word for plural in Vietnamese: những and các.
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">những</span> a.used to match the plural;
            b. used before interrogative pronouns
            <span className="font-bold"> ai </span> who?
            <span className="font-bold"> đầu </span> where?
            <span className="font-bold"> gì </span> what?
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold"> các </span>defines a set as a whole and
            does not require a special definition.
          </p>
        </div>
      </div>
    </Main>
  );
}
