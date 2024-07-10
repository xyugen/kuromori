import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

const Nav = () => {
  return (
    <nav className='flex items-center h-5 space-x-4 text-sm font-medium'>
      <Link href={'/'} className='hover:underline underline-offset-2'>Home</Link>
      <Separator orientation='vertical' />
      <Link href={'/catalog'} className='hover:underline underline-offset-2'>Catalog</Link>
    </nav>
  )
}

export default Nav