import { useState } from "react";

function useSessionStorage<T>(key: string, initialValue: T) {
  // Get the value from localStorage or use the initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading sessionStorage key:", key, error);
      return initialValue;
    }
  });

  // Create a function to set the value in state and sessionStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting sessionStorage key:", key, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useSessionStorage;
