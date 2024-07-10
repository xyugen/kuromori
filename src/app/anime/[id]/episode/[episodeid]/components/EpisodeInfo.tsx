import React from 'react';
import { IAnimeInfo } from '@consumet/extensions';

interface EpisodeInfoProps {
  anime: IAnimeInfo;
  episodeid: string;
}

const EpisodeInfo: React.FC<EpisodeInfoProps> = ({ anime, episodeid }) => {
  return (
    <div className='text-wrap h-fit p-4 bg-white/50 dark:bg-black/50 rounded shadow-md'>
      <h1 className='text-primary text-3xl font-bold'>{anime.title.english}</h1>
      <p className='text-foreground/70 text-base'>Episode {episodeid}</p>
      <p className='text-foreground/70 text-sm'>{anime.description}</p>
    </div>
  )
}

export default EpisodeInfo;