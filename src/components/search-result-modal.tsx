import { IAnimeResult, ISearch } from '@consumet/extensions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

const SearchResultModal = ({ searchResult }: { searchResult: ISearch<IAnimeResult> }) => {
  const MAX_RESULTS = 6;

  return (
    <div className='bg-background border border-foreground/10 shadow dark:shadow-md rounded-md p-1'>
      <ul className='space-y-2'>
        {
          searchResult.results.slice(0, MAX_RESULTS).map((result, index) => (
            <>
              <li key={index} className='px-4 py-2 hover:bg-foreground/10 rounded-sm'>
                <Link
                  href={'/anime/' + result.id}
                  className='text-sm font-medium hover:underline underline-offset-2 flex justify-between items-center'
                >
                  <div className='w-full flex flex-col'>
                    <span className='w-full'>{result.title.toString()}</span>
                    <span className='text-foreground/50 text-xs'>{result.releaseDate}</span>
                  </div>
                  <Image
                    src={result.image!}
                    alt={result.title.toString()}
                    width={30}
                    height={30}
                    className='rounded-md'
                  />
                </Link>
              </li>
              {index !== MAX_RESULTS - 1 && <Separator orientation='horizontal' />}
            </>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchResultModal