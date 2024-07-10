import React from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

interface EpisodePlayerProps {
  defaultSourceUrl: string;
}

const EpisodePlayer: React.FC<EpisodePlayerProps> = ({ defaultSourceUrl }) => {
  return (
    <MediaPlayer src={defaultSourceUrl}>
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}

export default EpisodePlayer;