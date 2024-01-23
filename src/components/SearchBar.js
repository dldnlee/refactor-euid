import search from '../assets/icons/search.svg';

export default function SearchBar() {
  return (
    <form className="flex p-2 bg-primary">
      <label htmlFor="search-field" className="sr-only">검색</label>
      <input type="text" id="search-field" className='w-full px-2 rounded-md' placeholder='검색'/>
      <img src={search} alt="돋보기" className='px-1' />
    </form>
  )
}