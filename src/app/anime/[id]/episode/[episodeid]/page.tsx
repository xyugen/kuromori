import { ANIME } from '@consumet/extensions';
import React from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

const Page = async ({ params }: { params: { id: string, episodeid: string }}) => {
  const { id: animeId, episodeid } = params;
  const episodeId = `${animeId}-episode-${episodeid}`
  const gogoanime = new ANIME.Gogoanime();
  const anime = await gogoanime.fetchAnimeInfo(animeId);
  const sources = (await gogoanime.fetchEpisodeSources(episodeId)).sources;

  const defaultSourceUrl = sources[2].url;

  return (
    <main className='max-w-6xl pb-1 mx-auto px-4 pt-10 space-y-4'>
      <div className='w-full shadow-sm bg-white dark:bg-black rounded-lg py-4'>
        <div className='max-w-4xl mx-auto flex'>
          <MediaPlayer src={defaultSourceUrl}>
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{anime.title.toString()}</h1>
        <p className='text-foreground/70'>Episode {episodeid}</p>
        <p className='text-foreground/70'>{anime.description}</p>
      </div>
    </main>
  )
}

export default Page