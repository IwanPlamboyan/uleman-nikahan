import { useCallback, useEffect, useRef, useState } from "react";
import Sample1Cover from "../components/sample1/Sample1Cover";
import Sample1MainInvitation from "../components/sample1/Sample1MainInvitation";

const Sample1Page = () => {
  useEffect(() => {
    document.title = "Invitation - Template Sample 1";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Carattere&family=Cardo:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tangerine:wght@400;700&display=swap";

    document.head.append(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleOpenInvitation = () => {
    const audio = audioRef.current;
    setIsOpen(true);
    setTimeout(() => {
      setShowMain(true);

      //handle sound music
      audio.currentTime = 40;
      audio.play();
      setIsPlaying(true);
    }, 500);
  };

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    }

    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <main className="max-w-lg mx-auto overflow-hidden">
      {/* start sound music */}
      <audio ref={audioRef} loop>
        <source src="music/NIKI-You'll_be_in_my_heart.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* end sound music */}

      {!showMain ? (
        <Sample1Cover
          isOpen={isOpen}
          handleOpenInvitation={handleOpenInvitation}
        />
      ) : (
        <Sample1MainInvitation
          isOpen={isOpen}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
        />
      )}
    </main>
  );
};

export default Sample1Page;
