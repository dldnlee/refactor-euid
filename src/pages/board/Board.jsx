import BoardTopBar from "../../components/BoardTopBar";
import BoardPosts from "../../components/BoardPosts";
import { createContext } from "react";
import { useFilterCategory } from "../../components/useFilterCategory";

export const SelectedContext = createContext(null); // exporting the value

export default function Board() {
  const {selected, setSelected, data} = useFilterCategory();

  return (
    <div className="board--container">
      {/* searchbar */}
      <SelectedContext.Provider value={{selected, setSelected, data}}>
        <BoardTopBar/>
        <BoardPosts/>
      </SelectedContext.Provider>
    </div>
  )
}