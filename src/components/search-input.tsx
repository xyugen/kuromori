import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className='relative w-fit transition-all'>
      <Search className='absolute top-1/2 left-3 -translate-y-1/2 text-foreground/70' size={20} />
      <Input className='shadow-sm pl-10 dark:bg-white/10 dark:border-2 dark:border-foreground/10' placeholder='Search' />
    </div>
  )
}

export default SearchInput