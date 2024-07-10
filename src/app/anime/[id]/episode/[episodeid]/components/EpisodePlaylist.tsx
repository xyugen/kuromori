import React from 'react';
import { IAnimeInfo } from '@consumet/extensions';
import Link from 'next/link';
import Image from 'next/image';

interface EpisodePlaylistProps {
  anime: IAnimeInfo;
  animeId: string;
  currentEpisodeId: number;
}

const EpisodePlaylist: React.FC<EpisodePlaylistProps> = ({ anime, animeId, currentEpisodeId }) => {
  return (
    <div className='w-full space-y-2'>
      <h1 className='text-3xl font-bold'>Next Episodes</h1>
      <div className='p-4 bg-black/10 shadow rounded-sm'>
        <ul className='space-y-4'>
          {anime.episodes?.slice(currentEpisodeId + 1, anime.totalEpisodes).map((episode, index) => (
            <li key={index}>
              <Link href={`/anime/${animeId}/episode/${currentEpisodeId + index + 1}`}>
                <Image
                  src={episode.image!}
                  alt={episode.title!}
                  width={400}
                  height={200}
                  className='rounded-md h-40 md:h-fit object-cover'
                  draggable='false'
                />
                <p><span className='font-bold'>Episode {currentEpisodeId + index + 1}</span> - {episode.title}</p>
                <p className='text-foreground/70 truncate'>{episode.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EpisodePlaylist;