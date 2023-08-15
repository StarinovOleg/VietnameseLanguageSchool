import React from "react";
import Main from "../main";

export default function Adverbs() {
  return (
    <Main>
      <div>There are special adverbs for expressing quality assessment.</div>
      <div>
        <p className="font-bold">
          Adverbs of quality score are placed before a verb, adjective or other
          adverb.
        </p>
      </div>
      <div>
        <div>
          <p>
            <span className="font-bold">rất</span> - denotes the highest quality
            rating - very.
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">khá</span> - denotes a sufficiently high
            quality rating - enough.
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">tương đố</span> - denotes a relatively
            high quality rating - comparatively.
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">không ... lắm</span> - means not a very
            high quality rating.
          </p>
        </div>
      </div>
    </Main>
  );
}
