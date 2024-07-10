import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IAnimeEpisode } from '@consumet/extensions'

interface AnimeEpisodesProps {
  episodes?: IAnimeEpisode[]
  animeId: string
}

const AnimeEpisodes: React.FC<AnimeEpisodesProps> = ({ episodes, animeId }) => {
  return (
    <div>
      <h2 className='text-xl font-bold'>Episodes</h2>
      <div className='flex flex-wrap gap-7'>
        {episodes?.map((episode, index) => (
          <Link
            href={`/anime/${animeId}/episode/${index + 1}`}
            key={index}
            className='max-w-full w-full md:max-w-[160px] p-2 hover:bg-primary/40 rounded-sm'
          >
            <Image
              src={episode.image!}
              alt={episode.title!}
              width={400}
              height={200}
              className='rounded-md h-40 md:h-fit object-cover'
              draggable='false'
            />
            <h3 className='text-base font-medium text-wrap'>Episode {index + 1}</h3>
            <p className='text-sm text-foreground/70'>{episode.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimeEpisodes