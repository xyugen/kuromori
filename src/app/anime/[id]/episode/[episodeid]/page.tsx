import { ANIME, META } from '@consumet/extensions';
import React from 'react';
import EpisodePlayer from './components/EpisodePlayer';
import EpisodeInfo from './components/EpisodeInfo';
import EpisodePlaylist from './components/EpisodePlaylist';

const EpisodePage = async ({ params }: { params: { id: string, episodeid: string }}) => {
  const { id: animeId, episodeid } = params;
  const episodeId = `${animeId}-episode-${episodeid}`;
  const gogoanime = new ANIME.Gogoanime();
  const sources = (await gogoanime.fetchEpisodeSources(episodeId)).sources;
  const defaultSourceUrl = sources[2].url;

  const anilist = new META.Anilist();
  const anilistId = (await anilist.search(animeId)).results[0].id;
  const anime = await anilist.fetchAnimeInfo(anilistId);

  return (
    <main className='max-w-6xl mx-auto px-4 py-10 space-y-4'>
      <div className='w-full shadow-sm bg-white dark:bg-black rounded-lg py-4'>
        <div className='max-w-4xl mx-auto flex'>
          <EpisodePlayer defaultSourceUrl={defaultSourceUrl} />
        </div>
      </div>
      <div>
        <div className='flex gap-4 flex-wrap-reverse sm:flex-nowrap'>
          <EpisodeInfo anime={anime} episodeid={episodeid} />
          <EpisodePlaylist anime={anime} animeId={animeId} currentEpisodeId={parseInt(episodeid)} />
        </div>
      </div>
    </main>
  )
}

export default EpisodePage;