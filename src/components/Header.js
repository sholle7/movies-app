import React from 'react'
import '../styles/Header.css'
import Button from 'react-bootstrap/Button';

function Header({setFilteringGenreId}) {
  return (
    <div className='header'>
        <Button onClick={()=>setFilteringGenreId(35)} variant="outline-primary">Comedy</Button>
        <Button onClick={()=>setFilteringGenreId(28)} variant="outline-primary">Action</Button>
        <Button onClick={()=>setFilteringGenreId(0)} variant="outline-primary">All</Button>
    </div>
  )
}

export default Header