import CategoryBar from "../../components/CategoryBar"
import SearchBar from "../../components/SearchBar"

export default function Board() {
  return (
    <div className="board--container">
      {/* searchbar */}
      <SearchBar />
      <CategoryBar />
    </div>
  )
}