import { createContext, useContext, useState, useEffect } from "react";

const SelectedItemContext = createContext();

export const SelectedItemProvider = ({ children }) => {
  // ✅ Load from localStorage on first render
  const [selectedItem, setSelectedItem] = useState(() => {
    const saved = localStorage.getItem("selectedItem");
    return saved ? JSON.parse(saved) : null;
  });

  // ✅ Save to localStorage whenever it changes
  useEffect(() => {
    if (selectedItem) {
      localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    } else {
      localStorage.removeItem("selectedItem"); // clear if none
    }
  }, [selectedItem]);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export const useSelectedItem = () => useContext(SelectedItemContext);