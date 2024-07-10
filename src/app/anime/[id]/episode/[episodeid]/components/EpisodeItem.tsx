import React from 'react';
import { IAnimeEpisode } from '@consumet/extensions';
import Link from 'next/link';
import Image from 'next/image';

interface EpisodeItemProps {
  episode: IAnimeEpisode;
  episodeNumber: number;
  animeId: string;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, episodeNumber, animeId }) => {
  return (
    <li>
      <Link href={`/anime/${animeId}/episode/${episodeNumber}`} className='space-y-2'>
        <Image
          src={episode.image!}
          alt={episode.title!}
          width={400}
          height={200}
          className='rounded-md h-40 md:h-fit object-cover'
          draggable='false'
        />
        <p><span className='font-bold'>Episode {episodeNumber}</span> - {episode.title}</p>
        <p className='text-foreground/70 truncate'>{episode.description}</p>
      </Link>
    </li>
  )
}

export default EpisodeItem;