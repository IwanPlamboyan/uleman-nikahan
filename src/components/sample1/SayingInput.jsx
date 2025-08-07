import { UserRound } from "lucide-react";
import { useState } from "react";

const SayingInput = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <form action="">
      <textarea
        onFocus={() => setShowForm(true)}
        name="sayingPrayer"
        id="sayingPrayer"
        placeholder="Ucapan Selamat & doa"
        className="py-2 px-3 w-full min-h-24 rounded-sm border border-stone-400 outline-none resize-none focus:border-stone-500"
      />
      {showForm && (
        <>
          <div className="mt-2 relative">
            <UserRound
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-[10px] text-stone-700"
            />
            <input
              type="text"
              placeholder="Nama*"
              className="py-1 pl-9 w-full border border-stone-400 rounded-sm outline-none focus:border-stone-500"
              required
            />
          </div>
          <div className="mt-2 flex justify-end">
            <button className="py-2 px-7 bg-[#C4A17E] text-white rounded-sm cursor-pointer">
              Kirim
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default SayingInput;
