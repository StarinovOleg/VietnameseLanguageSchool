import React from "react";
import ReactAudioPlayer from "react-audio-player";
import ButtonSound from "../../../ui-library/buttons/ButtonSound";
import sound from "../dictionary-grammar/the_peronal_pronouns/pronouns.mp3";
import Main from "../main";
export default function ThePersonalPronouns() {
  return (
    <Main>
      <div>
        The pronoun is used for oneself, and for the person you are speaking to.
        Pronoun is determined not only by sex and relative age, but also on your
        level of intimacy with the person you are speaking to.
      </div>
      <div>1. The singular first person:</div>
      <div>
        "I", or "Me" used in formal situation, when speakers do not know one
        another.
      </div>
      <div className="flex">
        - <p className="font-bold">Tôi</p>: I
      </div>
      <div>2. The singular second person:</div>
      <div>"You" not commonly used in spoken. Used in written.</div>
      <div className="flex">
        - <p className="font-bold">Bạn</p>
        <p>: You</p>
      </div>
      <div>
        <div className="flex">
          <p className="font-bold">Em</p>: <p>Younger person</p>
        </div>
        <div className="flex">
          <p className="font-bold">Anh</p>: <p>Older person (man)</p>
        </div>
        <div className="flex">
          <p className="font-bold">Chị</p>:<p>Older person (woman)</p>
        </div>
        <div className="flex">
          <p className="font-bold">Cô</p>: <p>Older female (Aunt)</p>
        </div>
        <div className="flex">
          <p className="font-bold">Chú/bác</p>:<p>Older male (Uncle)</p>
        </div>
        <div className="flex">
          <p className="font-bold">Ông</p>:<p>Grandfather</p>
        </div>
        <div className="flex">
          <p className="font-bold">Bà</p>: <p>Grandmother</p>
        </div>
        <div className="flex">
          <p className="font-bold">Chúng tôi</p>:<p></p> We
        </div>
        <ReactAudioPlayer
          className="inline-block bg-inherit mt-4 w-full lg:w-auto md:w-auto"
          src={sound}
          controls
        />
      </div>
    </Main>
  );
}
