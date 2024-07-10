import { IAnimeInfo } from '@consumet/extensions'
import React from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'

interface AnimeInfoProps {
  animeInfo: IAnimeInfo
}

const AnimeDescription: React.FC<AnimeInfoProps> = ({ animeInfo }) => {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>Description</h2>
      <p className='text-foreground/70'>{animeInfo.description}</p>
      {animeInfo.trailer &&
        <>
          <h2 className='text-xl font-bold'>Trailer</h2>
          <div className='w-80'>
            <MediaPlayer src={`https://www.youtube.com/watch?v=${animeInfo.trailer?.id}`} controls>
              <MediaProvider/>
            </MediaPlayer>
          </div>
        </>
      }
    </div>
  )
}

export default AnimeDescription