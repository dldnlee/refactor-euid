
export default function Category(props) {
  return (
    <li className="w-full text-xs">
      <button type="button" className="w-full text-gra py-1 active:text-black">{props.text}</button>
    </li>
  )
}