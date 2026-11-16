import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ambientAudio } from '../../utils/audioSynth';

export const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleToggle = () => {
    const nextState = ambientAudio.toggle();
    setIsPlaying(nextState);
  };

  return (
    <button
      className="music-toggle-btn"
      onClick={handleToggle}
      aria-label={isPlaying ? 'Mute ambient wedding music' : 'Play ambient wedding music'}
      title={isPlaying ? 'Mute music' : 'Play ambient music'}
      type="button"
    >
      {isPlaying ? (
        <Volume2 size={20} color="#263D35" />
      ) : (
        <VolumeX size={20} color="#879487" />
      )}
    </button>
  );
};
