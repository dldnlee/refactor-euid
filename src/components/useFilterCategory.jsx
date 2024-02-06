import { useEffect, useState } from "react";
import boardData from '../data/board.json';

export const useFilterCategory = () => {

  function filterByCategory(data, option) {
    let filteredData;
    filteredData = data.filter(item => {
      if(item.category === option) {
        return item;
      }
    })
    return filteredData;
  }

  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(boardData);

  useEffect(() => {
    if(selected === 0 ) {
      setData(boardData);
    } else if (selected === 2) {
      setData(filterByCategory(boardData, "같이해요"));
    } else if (selected === 3) {
      setData(filterByCategory(boardData, "질의응답"));
    } else {
      setData([]);
    }
    
  }, [selected])

  return {selected, setSelected, data, setData};
}