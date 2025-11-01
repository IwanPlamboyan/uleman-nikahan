import { UserRound } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const SayingInput = ({ sendWishes }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await sendWishes(name, message);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Ucapan gagal dikirim. Silakan coba lagi.",
        confirmButtonColor: "#cf9058",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Ucapanmu telah terkirim",
        timer: 2000,
      });
      setName("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onFocus={() => setShowForm(true)}
        name="sayingPrayer"
        id="sayingPrayer"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
