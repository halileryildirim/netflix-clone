import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    const updatedList = [...list];
    setList(updatedList);
  };

  const removeFromList = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
  };

  return (
    <ListContext.Provider value={(list, addToList, removeFromList)}>
      {children}
    </ListContext.Provider>
  );
};
