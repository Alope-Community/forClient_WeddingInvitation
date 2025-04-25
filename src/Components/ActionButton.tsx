import React, { useRef, useState, useEffect } from "react";
import { FaWhatsapp, FaPlay, FaExpand, FaCompress } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const FloatButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Auto play audio
    const playAudio = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // autoplay blocked, ignore
            });
        }
      }
    };

    playAudio();

    // Auto enter fullscreen
    const enterFullscreen = () => {
      const elem = document.documentElement;
      if (!document.fullscreenElement && elem.requestFullscreen) {
        elem.requestFullscreen().then(() => {
          setIsFullscreen(true);
        });
      }
    };

    enterFullscreen();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleWa = () => {
    window.location.href = "https://wa.me/62";
  };

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="mx-auto fixed bottom-25 right-auto ml-2 flex flex-col items-center space-y-3 z-50">
      <div className="bg-yellow-700/50 rounded-full flex flex-col items-center space-y-3 p-2">
        <button
          onClick={toggleWa}
          className="bg-yellow-700 text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaWhatsapp size={20} />
        </button>

        <audio ref={audioRef} vocab="80" src="/audio/cinta-terakhir.mp3" />

        <button
          onClick={togglePlay}
          className="bg-yellow-700 text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="bg-yellow-700 text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};

export default FloatButton;
