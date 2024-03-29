import search from '../assets/icons/search.svg';
import { useContext} from 'react';
import { SelectedContext } from '../pages/Board';



function SearchBar() {
  return (
    <form className="flex py-3 px-3 bg-primary">
      <label htmlFor="search-field" className="sr-only">검색</label>
      <input type="text" id="search-field" className='w-full px-2 py-2 rounded-md text-sm' placeholder='검색'/>
      <button className='ps-2'><img src={search} alt="돋보기" /></button>
    </form>
  )
}

function Category(props) {
  const {selected, setSelected} = useContext(SelectedContext); // just call this to any function when i want to use the selected value

  const active = {
    'borderTop' : '1px solid white',
    'color' : 'white'
  }

  return (
    <li className="w-full text-xs">
      <button 
      type="button" 
      className="w-full text-gray-400 py-3 active:text-background"
      style={selected === props.index ? active : {}}
      onClick={() => {
        setSelected(props.index)
      }}>{props.text}</button>
    </li>
  )
}

function CategoryBar() {
  

  return (
    <ul className="flex bg-primary">
      <Category text="전체"  index={0}/>
      <Category text="동네마켓" index={1}/>
      <Category text="같이해요" index={2}/>
      <Category text="질의응답" index={3}/>
    </ul>
  )
}


export default function BoardTopBar() {
  return (
    <div className='sticky top-0'>
      <SearchBar />
      <CategoryBar/>
    </div>
  )
}