import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Title from './title'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden' asChild>
        <Button variant={'secondary'} size={'icon'}>
          <Menu className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>
            <Title />
          </SheetTitle>
        </SheetHeader>
        <div className='m-4'>
          <nav className='flex flex-col gap-2'>
            <Link href={'/'} className='hover:underline underline-offset-2'>Home</Link>
            <Link href={'/catalog'} className='hover:underline underline-offset-2'>Catalog</Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar