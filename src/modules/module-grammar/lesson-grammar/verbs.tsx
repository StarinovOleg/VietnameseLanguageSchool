import React from "react";
import Main from "../main";

export default function Verbs() {
  return (
    <Main>
      <div>
        <div> subject + verbs + object</div>
        <div>
          <p>
            Example:<span className="font-bold">Tôi + học + tiền việt</span>
          </p>
        </div>
        <div>I + to learn + Vietnamese language</div>
      </div>
      <div>
        <div> subject + negative + verbs + object</div>
        <div>
          <p>
            Example:
            <span className="font-bold">Tôi + không+ học + tiền việt</span>
          </p>
        </div>
        <div>I + not to learn + Vietnamese language</div>
      </div>
      <div>
        <div>
          Verbs in Vietnamese do not conjugate. Verbs do not have forms of
          persons, tenses, moods.
        </div>
        <div>Constructions for Expressing Past, Present and Future Tense</div>
        <div>
          <p>
            Present Simple tense:
            <span className="font-bold"> đang</span>
          </p>
        </div>
        <div>
          <p>
            Past Simple tense:
            <span className="font-bold">đã</span>
          </p>
        </div>
        <div>
          <p>
            Future Simple tense:
            <span className="font-bold">sẽ</span>
          </p>
        </div>
      </div>
    </Main>
  );
}
