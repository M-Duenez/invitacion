import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {

        setCurrentTime(audio.currentTime);

        setDuration(audio.duration || 0);

        setProgress(
            (audio.currentTime / audio.duration) * 100 || 0
        );

    };

    const finishSong = () => {

        setIsPlaying(false);

    };

    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("loadedmetadata", updateProgress);

    audio.addEventListener("ended", finishSong);

    return () => {

        audio.removeEventListener("timeupdate", updateProgress);

        audio.removeEventListener("loadedmetadata", updateProgress);

        audio.removeEventListener("ended", finishSong);

    };

}, []);

    const togglePlay = async () => {

        if (!audioRef.current) return;

        if (isPlaying) {

            audioRef.current.pause();

        } else {

            await audioRef.current.play();

        }

        setIsPlaying(!isPlaying);

    };

    return (
        <section className="w-full max-w-xl mx-auto px-5 py-4">
            <audio
                ref={audioRef}
                src="/boda/musica/nuestra_cancion.mp3"
                preload="metadata"
            />
            {/* Título */}

            <div className=" text-center">

                <p className="subtitulo text-navy-700 text-center text-[22px]">
                    Dale play para escuchar nuestra canción
                </p>

            </div>

            {/* Corazón */}

            <div className="flex justify-end">
                <button className=" text-navy-700 transition duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
                    </svg>

                </button>

            </div>

            {/* Barra */}

            <div className="mt-2">

                <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    readOnly
                    className="w-full accent-gold-600"
                />

            </div>

            {/* Tiempo */}

            <div className="flex justify-between  text-sm text-navy-700">

                <span>0:00</span>

                <span>2:59</span>

            </div>

            {/* Controles */}

            <div className="
        flex
        items-center
        justify-center
        gap-x-5
        mt-2
        text-navy-700
        "
            >

                {/* Shuffle */}

                <button>

                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                        <path d="M16 3h5v5" />

                        <path d="M4 20L21 3" />

                        <path d="M21 16v5h-5" />

                        <path d="M15 15l6 6" />

                        <path d="M4 4l5 5" />

                    </svg>

                </button>

                {/* Anterior */}

                <button>

                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">

                        <path d="M6 5h2v14H6z" />

                        <path d="M18 6l-8 6 8 6z" />

                    </svg>

                </button>

                {/* Play */}

                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}

                    whileTap={{ scale: .92 }}

                    className="
          w-12
          h-12
          rounded-full
          
          border-2
          border-gold-500
          shadow-xl
          flex
          items-center
          justify-center
          "
                >
                {
                    isPlaying ?

                    (
                        // Pause
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-gold-700"
                        >
                            <rect x="6" y="5" width="4" height="14" rx="1"/>
                            <rect x="14" y="5" width="4" height="14" rx="1"/>
                        </svg>
                    )

                    :

                    (

                        // Play

                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-gold-700 "
                        >
                            <path d="M8 5v14l11-7z"/>
                        </svg>

                    )
                }

                </motion.button>

                {/* Siguiente */}

                <button>

                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">

                        <path d="M16 5h2v14h-2z" />

                        <path d="M6 6l8 6-8 6z" />

                    </svg>

                </button>

                {/* Repeat */}

                <button>

                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                        <path d="M17 1l4 4-4 4" />

                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />

                        <path d="M7 23l-4-4 4-4" />

                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />

                    </svg>

                </button>

            </div>

        </section>
    );
}