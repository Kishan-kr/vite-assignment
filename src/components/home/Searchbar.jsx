import React, { useState } from 'react'
import SearchResult from './SearchResult'
import Alert from '../Alert';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [isAlertActive, setisAlertActive] = useState(true)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://raw.githubusercontent.com/Kishan-kr/vite-assignment/main/src/data/users.json')
    if(!response.ok) {
      return <Alert 
        active={isAlertActive} 
        setActive={setisAlertActive} 
        heading={'Server Error'}
        content={response.error}
        bgColor='red-200' 
        textColor='red-600'
        icon='danger'
      />

    }
    const data = await response.json();

    const results = data.filter((user) => (
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    setSearchResults(results);
    setShowResult(true);
  }

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='relative'>
      <form className="relative mt-2 rounded-lg shadow-sm" onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          name="search" 
          id="search-input" 
          className="block py-5 w-full rounded-md border-0 pl-7 pr-28 md:pr-40 text-gray-900 ring-1 ring-inset ring-[#BFBFBF] placeholder:text-gray-400 placeholder:font-semibold font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          placeholder="Search by name"
          value={searchQuery} 
          onChange={(e) => handleOnChange(e)}
        />

        <input type='submit' role='button' className='bg-primary rounded-lg border border-primary text-sm font-bold text-white p-3 h-16 w-28 md:w-40 absolute inset-y-0 right-0' value='Search'/>
      </form>

      {searchQuery && showResult && <SearchResult result={searchResults}/>}
    </div>
  )
}

export default Searchbar