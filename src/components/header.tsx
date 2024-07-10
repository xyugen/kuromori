import React from 'react'
import logo from '@/images/kuromori-logo.png';
import Image from 'next/image';
import { ModeToggle } from './theme-toggle';
import Link from 'next/link';
import SearchInput from './search-input';

const Header = () => {
  return (
    <header className='border-b border-foreground/10 flex justify-between items-center px-3 md:px-12 py-6 gap-8'>
      <div className='flex items-center'>
        <Link href={'/'} draggable='false'>
          <h1 className='text-2xl md:text-3xl font-bold font-yuji-syuku select-none'>黒<span className='text-primary'>森</span></h1>
          <span className='sr-only text-nowrap'>Kuromori</span>
        </Link>
      </div>
      <SearchInput />
      <ModeToggle />
    </header>
  )
}

export default Header