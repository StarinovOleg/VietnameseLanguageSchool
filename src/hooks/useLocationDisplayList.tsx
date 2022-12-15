import { useLocation } from "react-router-dom";

export const useLocationDisplayList = (
  cardItemLesson: string | any[],
  value: number
) => {
  const location = useLocation();
  if (location.pathname === "/landing" || location.pathname === "/") {
    return cardItemLesson.slice(0, value);
  } else {
    return cardItemLesson;
  }
};
