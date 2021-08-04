import * as React from "react";

function useLocalStorage(key, initalVal) {
  const [value, setValue] = React.useState(() => {
    let storageVal = initalVal;
    if (localStorage.getItem(key)) {
      storageVal = localStorage.getItem(key);
    }
    return storageVal ? JSON.parse(storageVal) : initalVal;
  });

  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setItem];
}

export default useLocalStorage;
