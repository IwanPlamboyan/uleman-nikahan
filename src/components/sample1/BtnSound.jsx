import { Pause, Play } from "lucide-react";

const BtnSound = ({ togglePlayPause, isPlaying }) => {
  return (
    <div className="fixed bottom-32 inset-x-0 z-50">
      <div className="relative max-w-lg mx-auto">
        <button
          className="absolute right-5 bottom-0 p-2 bg-[#F0DDDD] rounded-full shadow-lg cursor-pointer"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause size={13} fill="#000" />
          ) : (
            <Play size={13} fill="#000" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BtnSound;
