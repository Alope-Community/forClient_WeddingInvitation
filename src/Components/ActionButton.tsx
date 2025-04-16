import React, { useRef, useState, useEffect } from 'react';
import { FaWhatsapp, FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

const FloatButton: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch(() => {
                            console.log("Klik Tombol Play");
                        });
                }
            }
        };

        playAudio()
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

    const toogleWa = () => {
        window.location.href = "https://wa.me/62"
    }

    return (
        <div className="fixed bottom-20 right-1 flex flex-col items-center space-y-3 z-50">
            <div className="bg-yellow-700/50  rounded-full flex flex-col items-center space-y-3 p-2">
                <button
                 onClick={toogleWa}
                 className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                    <FaWhatsapp size={20} />
                </button>
                <audio ref={audioRef} src="/audio/Sabilulungan.mp3" loop />
                <button
                    onClick={togglePlay}
                    className="bg-yellow-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
        </div>
    );
};

export default FloatButton;
