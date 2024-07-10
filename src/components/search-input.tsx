"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { ANIME, IAnimeResult, ISearch } from '@consumet/extensions'

const SearchInput = () => {
  const gogoanime = new ANIME.Gogoanime();
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<ISearch<IAnimeResult>>()

  const handleSearch = (query: string) => {
    gogoanime.search(query)
      .then(result => setSearchResult(result))
      .catch(error => console.log(error));
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    
    handleSearch(search);
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleSearch(search);
  }

  return (
    <form className='relative mx-8 md:w-full' onSubmit={handleSubmit}>
      <Search className='absolute top-1/2 left-3 -translate-y-1/2 text-foreground/70' size={20} />
      <Input id='search' value={search} name='search' className='shadow-sm pl-10 dark:bg-white/10 dark:border-2 dark:border-foreground/10' placeholder='Search' onChange={handleChange} />
    </form>
  )
}

export default SearchInput