import alertify from "alertifyjs";
import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list, item]);
    alertify.success("İzleme listesine eklendi!");
  };

  const removeFromList = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
    alertify.error("İzleme listesinden çıkarıldı!");
  };

  return (
    <ListContext.Provider value={{ list, addToList, removeFromList }}>
      {children}
    </ListContext.Provider>
  );
};
