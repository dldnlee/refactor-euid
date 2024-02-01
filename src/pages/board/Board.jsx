import BoardTopBar from "../../components/BoardTopBar";
import BoardPosts from "../../components/BoardPosts";
import { createContext, useState } from "react";
import boardData from '../../data/board.json';

export const SelectedContext = createContext(null); // exporting the value

export default function Board() {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(boardData);

  function handleData() {
    let filteredData = [];
    if(selected === 0) {
      boardData.forEach(item => {
        filteredData.push(item);
      })
      setData(filteredData);
      console.log(selected);
    } else if(selected === 2) {
      boardData.forEach(item => {
        if(item.category === "같이해요") {
          filteredData.push(item);
        }
      })
      setData(filteredData);
      console.log(selected);
    } else if(selected === 3) {
      boardData.forEach(item => {
        if(item.category === "질의응답") {
          filteredData.push(item);
        }
      })
      setData(filteredData);
      console.log(selected);
    } else {
      console.log('error');
    }

    // console.log(filteredData);
  }


  return (
    <div className="board--container">
      {/* searchbar */}
      <SelectedContext.Provider value={{selected, setSelected, data, handleData}}>
        <BoardTopBar/>
        <BoardPosts/>
      </SelectedContext.Provider>
    </div>
  )
}