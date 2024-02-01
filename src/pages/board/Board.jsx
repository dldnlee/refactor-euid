import BoardTopBar from "../../components/BoardTopBar";
import { createContext, useState } from "react"

export const SelectedContext = createContext(null); // exporting the value
export const SelectHandlerContext = createContext(null);

export default function Board() {
  const [selected, setSelected] = useState(0);

  function select(index) {
    setSelected(index)
  }

  function clickHandler(e) {
    e.preventDefault();

    const button = e.target.closest('ul > li > button');
    if (!button) return; 

    
    console.log('debug');
  }


  return (
    <div className="board--container">
      {/* searchbar */}
      <SelectedContext.Provider value={{selected, select}}>
        <BoardTopBar onClick={clickHandler}/>
      </SelectedContext.Provider>
    </div>
  )
}