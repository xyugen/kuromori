"use client"

import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { ANIME, IAnimeResult, ISearch } from '@consumet/extensions'
import SearchResultModal from './search-result-modal'

const SearchInput = () => {
  const gogoanime = new ANIME.Gogoanime();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<ISearch<IAnimeResult>>()

  const handleSearch = (query: string) => {
    if (!query) return setSearchResult(undefined);
    gogoanime.search(query)
      .then(result => setSearchResult(result))
      .catch(error => console.log(error));
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearch('');
    } else {
      setSearch(e.target.value)
    }

    handleSearch(search);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(search);
  }

  return (
    <form className='relative mx-8 md:w-full' onSubmit={handleSubmit}>
      <Search className='absolute top-1/2 left-3 -translate-y-1/2 text-foreground/70' size={20} />
      <Input id='search' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={search} name='search' className='shadow-sm pl-10 dark:bg-white/10 dark:border-2 dark:border-foreground/10' placeholder='Search' onChange={handleChange} />
      {
        searchResult && isFocused && (
          <div className='absolute w-full'>
            <SearchResultModal searchResult={searchResult} />
          </div>
        )
      }
    </form>
  )
}

export default SearchInput