import React from 'react'
import { ModeToggle } from './theme-toggle';
import SearchInput from './search-input';
import MobileSidebar from './mobile-sidebar';
import Title from './title';
import Nav from './nav';

const Header = () => {
  return (
    <header className='border-b border-foreground/10 flex justify-between items-center px-3 md:px-12 py-6 gap-2'>
      <MobileSidebar />
      <div className='hidden md:flex gap-12 items-center'>
        <Title className='w-24' />
        <Nav />
      </div>
      <SearchInput  />
      <ModeToggle />
    </header>
  )
}

export default Header