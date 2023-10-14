import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

function Dropdown({ dropdownTitle, items }) {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevState) => (
      !prevState
    ))
  }

  return (
    <Link className="dropdown relative inline-block text-left">
      <div>
        <button
          className='relative inline-flex w-full justify-center gap-x-1.5 rounded-md text-lg text-black px-3 py-1 font-bold align-center'
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          >{dropdownTitle}
          <BsChevronDown className='-mr-1 h-8 text-sm text-primary' aria-hidden="true" />
        </button>
      </div>

      <>{items?.length ? 
      <div 
        className={`menu absolute right-0 z-10 mt-0 w-44 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} 
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="menu-button" 
        tabIndex="-1">
        <div className="py-1 flex flex-col" role="none"> {
          items?.map((item) => (
            <NavItem key={item.path} item={item} />
          ))
        }
        </div>
      </div> : null
      }</>
    </Link>
  )
}

export default Dropdown