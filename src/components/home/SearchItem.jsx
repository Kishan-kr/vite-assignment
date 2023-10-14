import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  return (
    <Link to={`/detail/${item?.id}`}>
    <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item?.image} alt=""/>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.about.from}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{item.price}</p>
      <p className="mt-1 text-sm leading-5 text-blue-500">&#9733; {item.rating}</p>
    </div>
  </li>
  </Link>
  )
}

export default SearchItem