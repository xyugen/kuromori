import React from 'react';
import { IAnimeInfo } from '@consumet/extensions';
import EpisodeItem from './EpisodeItem';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
interface EpisodePlaylistProps {
  anime: IAnimeInfo;
  animeId: string;
  currentEpisodeId: number;
}

const EpisodePlaylist: React.FC<EpisodePlaylistProps> = ({ anime, animeId, currentEpisodeId }) => {
  const nextEpisodes = anime.episodes?.slice(currentEpisodeId + 1, anime.totalEpisodes) || [];

  return (
    <div className='w-full space-y-2'>
      <h1 className='text-3xl font-bold'>Next Episodes</h1>
      <div className='p-4 bg-black/10 shadow rounded-sm'>
        <ul className='space-y-4'>
          {nextEpisodes.length > 0 && (
            <>
              <EpisodeItem 
                episode={nextEpisodes[0]} 
                episodeNumber={currentEpisodeId + 1} 
                animeId={animeId}
              />
              {nextEpisodes.length > 1 && (
                <Collapsible>
                  <CollapsibleTrigger className="mt-2 w-full text-primary-foreground cursor-pointer flex items-center">
                      <span className='p-2 flex-1 mb-4 rounded-md transition-colors bg-primary hover:bg-primary/90'>Show more episodes</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {nextEpisodes.slice(1).map((episode, index) => (
                      <EpisodeItem 
                        key={index} 
                        episode={episode} 
                        episodeNumber={currentEpisodeId + index + 2} 
                        animeId={animeId}
                      />
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default EpisodePlaylist;