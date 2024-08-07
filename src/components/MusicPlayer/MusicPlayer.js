import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const MagicalMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(duration));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const seekPosition = (e.clientX - rect.left) / rect.width;
    const seekTime = seekPosition * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(seekPosition * 100);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-purple-100 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg text-purple-900">
      <p className="text-center mb-4 font-serif text-lg italic">
        Hay momentos en la vida que son irrepetibles, pero compartirlos con las personas que más quieres los convierten en inolvidables.
      </p>
      <div className="bg-white bg-opacity-20 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <button onClick={togglePlay} className="focus:outline-none">
            {isPlaying ? (
              <Pause className="text-purple-700 hover:text-purple-900 transition-colors" size={24} />
            ) : (
              <Play className="text-purple-700 hover:text-purple-900 transition-colors" size={24} />
            )}
          </button>
          <div className="text-sm font-medium">
            {currentTime} / {duration}
          </div>
          <div className="flex items-center">
            <Volume2 size={18} className="text-purple-700 mr-2" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div 
          className="w-full bg-purple-200 rounded-full h-1 cursor-pointer"
          ref={progressBarRef}
          onClick={handleSeek}
        >
          <div 
            className="bg-gradient-to-r from-purple-400 to-indigo-400 h-1 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <audio 
        ref={audioRef}
        src="https://firebasestorage.googleapis.com/v0/b/mi-fiesta-f786e.appspot.com/o/music%2Fuwu.mp3?alt=media&token=some-long-token"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MagicalMusicPlayer;