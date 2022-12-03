import React, { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue((previousValue) => !previousValue);
  }

  return [value, toggleValue];
}
