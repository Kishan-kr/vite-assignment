import React from 'react'
import SearchItem from './SearchItem'

function SearchResult({result}) {
  if(!result.length) {
    return <div className='bg-background max-h-80 overflow-auto p-3 absolute top-[100%] w-[100%] text-red-500'>No result found!</div>
  }
  
  return (
    <div className='bg-background max-h-80 overflow-auto p-3 absolute top-[100%] w-[100%]'>
      <ul>{result?.map((user) => (
        <SearchItem item={user}/>
      ))}</ul>
    </div>
  )
}

export default SearchResult