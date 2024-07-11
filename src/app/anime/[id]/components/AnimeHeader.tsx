import React from 'react'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { IAnimeInfo } from '@consumet/extensions'
import StartWatchingButton from './StartWatchingButton'

interface AnimeHeaderProps {
  animeInfo: IAnimeInfo
  animeId: string
}

const AnimeHeader: React.FC<AnimeHeaderProps> = ({ animeInfo, animeId }: AnimeHeaderProps) => {
  const animeTitle = typeof animeInfo.title === 'string' ? animeInfo.title : animeInfo.title.english!;
  return (
    <div className='relative'>
      <div className='flex gap-2 md:gap-8 flex-wrap md:flex-nowrap'>
        <Image
          src={animeInfo.image!}
          alt={animeTitle}
          width={200}
          height={200}
          className='rounded-md h-fit object-cover'
          draggable='false'
        />

        <div className='flex flex-col justify-center gap-3'>
          <div>
            <h1 className='text-2xl md:text-3xl font-bold'>{animeTitle}</h1>
            <span className='text-foreground/70 text-sm'>{animeTitle}</span>
          </div>
          <p className='text-sm md:text-base text-foreground/70'>{animeInfo.description}</p>
          <div className='flex items-center gap-2'>
            <Star className='h-4 w-4 text-accent' />
            <span className='text-sm'>{animeInfo.rating || 'N/A'}</span>
          </div>
          <div className='flex gap-2 flex-wrap'>
            <StartWatchingButton animeId={animeId} />
            <Button variant='outline' className='w-full sm:w-36' disabled>Add to My List</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeHeader