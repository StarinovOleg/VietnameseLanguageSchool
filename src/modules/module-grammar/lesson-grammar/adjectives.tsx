import React from "react";
import Main from "../main";

export default function Adjectives() {
  return (
    <Main>
      <div>
        <p>Adjectives have no gender, no number, and no short forms.</p>
        <p className="font-bold">
          Differences between an English and a Vietnamese adjective is its
          position.
        </p>
      </div>
      <div>A Vietnamese adjective comes after the noun.</div>
      <div>
        <p className="font-bold">Tôi mua nước hoa quả ngon.</p>
      </div>
      <div>
        <p>
          <span className="font-bold">ngon</span> - tasty
        </p>
      </div>
      <div>For negative form use không</div>
      <div>
        <p className="font-bold">không ngon</p>
      </div>
    </Main>
  );
}
