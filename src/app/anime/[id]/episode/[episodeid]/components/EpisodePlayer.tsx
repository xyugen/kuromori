"use client"

import React, { useState } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IVideo } from '@consumet/extensions';

interface EpisodePlayerProps {
  sources: IVideo[];
}

const EpisodePlayer: React.FC<EpisodePlayerProps> = ({ sources }) => {
  const [source, setSource] = useState(sources.find(source => source.quality === 'default') || sources[0]);

  // const onQualityChange = (quality: string) => {
  //   const selectedSource = sources.find(source => source.quality === quality);
  //   if (selectedSource) {
  //     setSource(selectedSource);
  //   }
  // }

  return (
    // <>
    //   <Select onValueChange={onQualityChange} value={source.quality}>
    //     <SelectTrigger className='w-1/4 sm:w-1/5'>
    //       <SelectValue placeholder='Select quality' />
    //     </SelectTrigger>
    //     <SelectContent>
    //       {sources.map(source => (
    //         <SelectItem key={source.quality} value={source.quality!}>
    //           {source.quality}
    //         </SelectItem>
    //       ))}
    //     </SelectContent>
    //   </Select>
    <MediaPlayer src={source.url}>
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
    // </>
  )
}

export default EpisodePlayer;