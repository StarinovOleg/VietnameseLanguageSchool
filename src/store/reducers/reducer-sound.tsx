import { sound } from "../../services/sound_function";
import { converstation } from "../../store/static";

export const SOUND_NEGATIVE = "SOUND_NEGATIVE";
export const SOUND_POSITIVE = "SOUND_POSITIVE";
export const RESET = "RESET";
export const reducerSound = (
  state: { sound: any },
  action: { type: string }
) => {
  switch (action.type) {
    case SOUND_NEGATIVE:
      //return { sound: sound(converstation.words_sounds.negative) };
      return { sound: "" };
    case SOUND_POSITIVE:
      return { sound: sound(converstation.words_sounds.positive) };
    case RESET:
      return { sound: "" };
    default:
      return { sound: "" };
  }
};
