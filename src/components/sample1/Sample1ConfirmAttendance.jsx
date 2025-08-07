const Sample1ConfirmAttendance = () => {
  return (
    <section
      className="pt-14 pb-28 px-10 bg-[#BCBCBC]"
      style={{ clipPath: "polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%)" }}
    >
      <h2 className="text-center font-cardo text-4xl text-stone-700">
        Konfirmasi Kehadiran
      </h2>
      <p className="my-4 text-center font-poppins font-light text-stone-600">
        Mohon kesediaanya untuk melakukan konfirmasi kehadiran, supaya kami bisa
        mempersiapkan kehadiran anda dengan baik.
      </p>
      <form className="font-poppins text-stone-600">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          className="w-full py-2 px-3 bg-white border border-stone-500 outline-none focus:border-dashed"
        />
        <div className="w-full flex gap-1.5 mt-3">
          <div className="w-full flex flex-col">
            <label className="font-light cursor-pointer" htmlFor="confirmation">
              Konfirmasi
            </label>
            <select
              name="confirmation"
              id="confirmation"
              className="py-2 px-3 bg-white border border-stone-500 outline-none"
            >
              <option value="bersedia-hadir" className="text-xs md:text-lg">
                Bersedia Hadir
              </option>
              <option value="belum-bisa-hadir" className="text-xs md:text-lg">
                Belum Bisa Hadir
              </option>
            </select>
          </div>
          <div className="w-full flex">
            <div className="w-full flex flex-col">
              <label
                className="font-light cursor-pointer"
                htmlFor="numberOfAttendees"
              >
                Jumlah Hadir
              </label>
              <input
                type="number"
                name="numberOfAttendees"
                id="numberOfAttendees"
                className="w-full py-2 px-3 bg-white border border-stone-500 outline-none"
                defaultValue={2}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-3 py-2 w-full bg-[#333] text-sm text-white cursor-pointer"
        >
          Kirim Konfirmasi
        </button>
      </form>
    </section>
  );
};

export default Sample1ConfirmAttendance;
