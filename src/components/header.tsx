import React from 'react'
import logo from '@/images/kuromori-logo.png';
import Image from 'next/image';
import { ModeToggle } from './theme-toggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-b border-foreground/10 flex justify-between items-center px-12 py-6'>
      <div className='flex items-center gap-3'>
        <Link href={'/'} draggable='false'>
          <h1 className='text-3xl font-bold font-yuji-syuku select-none'>黒<span className='text-primary'>森</span></h1>
          <span className='sr-only'>Kuromori</span>
        </Link>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header