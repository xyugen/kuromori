"use client";

import React, { useState, useCallback, ChangeEvent, FormEvent, useEffect } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { ANIME, IAnimeResult, ISearch } from '@consumet/extensions';
import SearchResultModal from './search-result-modal';
import { cn } from '@/lib/utils';

const gogoanime = new ANIME.Gogoanime();

const SearchInput: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ISearch<IAnimeResult>>();
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(false);
  const searchBoxRef = React.useRef<HTMLDivElement>(null);

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResult(undefined);
      return;
    }

    try {
      const result = await gogoanime.search(query.trim());
      setSearchResult(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
    setIsBoxVisible(value.trim() !== '');
  }, [handleSearch]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(search);
  }, [search, handleSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
        setIsBoxVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form className="relative mx-8 flex-grow" onSubmit={handleSubmit}>
      <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-foreground/70" size={20} />
      <Input
        id="search"
        value={search}
        name="search"
        className="shadow-sm pl-10 dark:bg-white/10 dark:border-2 dark:border-foreground/10"
        placeholder="Search"
        onChange={handleChange}
      />
      {isBoxVisible && searchResult && (
        <div ref={searchBoxRef} className={"absolute w-full"}>
          <SearchResultModal searchResult={searchResult} />
        </div>
      )}
    </form>
  );
};

export default SearchInput;