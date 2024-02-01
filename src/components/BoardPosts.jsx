import { useContext } from "react"
import { SelectedContext } from "../pages/board/Board"


function Together(props) {
  return (
    <button className="text-left border-2 w-full">
      <p>{props.category}</p>
      <h2>{props.title}</h2>
      <p>{props.location}</p>
    </button>
  )
}


export default function BoardPosts() {
  const {data} = useContext(SelectedContext);

  const filteredData = data.map(item => {
    return (
      <Together key={item.id} category={item.category} title={item.title} location={item.location} />
    )
  })

  return(
    <div className="w-full">
      {filteredData}
    </div>
  )







}