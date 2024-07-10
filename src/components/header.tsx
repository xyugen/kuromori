import React from 'react'
import logo from '@/images/kuromori-logo.png';
import Image from 'next/image';
import { ModeToggle } from './theme-toggle';
import Link from 'next/link';
import SearchInput from './search-input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import Title from './title';

const Header = () => {
  return (
    <header className='border-b border-foreground/10 flex justify-between items-center px-3 md:px-12 py-6 gap-2'>
      <MobileSidebar />
      <div className='hidden md:block'>
        <Title />
      </div>
      <SearchInput />
      <ModeToggle />
    </header>
  )
}

export default Header