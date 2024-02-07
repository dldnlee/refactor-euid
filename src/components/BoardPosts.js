import { useContext } from "react"
import { SelectedContext } from "../pages/Board"


function Badge({category}) {
  if(category === "질의응답") {
    return (
    <p className="bg-blue-500 text-white py-[2px] px-[4px] text-xs rounded-md">{category}</p>
    )
  } else if (category === "같이해요") {  
    return (
      <p className="bg-red-300 text-white py-[2px] px-[4px] text-xs rounded-md">{category}</p>
    )
  } else {
    return(
      <p className="bg-gray-300 text-white py-[2px] px-[4px] text-xs rounded-md">{category}</p>
    )
  }
}

function Post(props) {
  return (
    <button className=" border-b-2 w-full flex flex-col gap-1 py-2 ps-3">
      <Badge category={props.category} />
      <h2 className="text-lg font-extrabold">{props.title}</h2>
      <p>{props.content.length > 30 ? `${props.content.slice(0, 23)}...` : props.content}</p>
      <p className="text-xs text-gray-400">{props.location}</p>
    </button>
  )
}

export default function BoardPosts() {
  const {data} = useContext(SelectedContext);
  return(
    <div className="w-full">
      {data.map(item => {
        return (
          <Post key={item.id} category={item.category} title={item.title} content={item.content} location={item.location} />
        )
      })}
    </div>
  )







}