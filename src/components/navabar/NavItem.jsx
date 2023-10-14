import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({item}) {
  return (
    <NavLink to={item.path} className='p-2 hover:bg-slate-100' >{item.title}</NavLink>
  )
}

export default NavItem