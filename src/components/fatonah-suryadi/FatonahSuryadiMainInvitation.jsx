import cartoon from "../../assets/sample2/cartoon.gif";
import ornamenBunga from "../../assets/sample2/ornbg-1.png";
import borderLine2 from "../../assets/sample2/border-line2.png";
import bismillahCalligraphy from "../../assets/sample2/bismillah-calligraphy.png";
import avatarIkhwan from "../../assets/sample2/avatar-ikhwan.png";
import avatarAkhwat from "../../assets/sample2/avatar-akhwt.png";
import Sample1Countdown from "../sample1/Sample1Countdown";
import bcaLogo from "../../assets/atm/bca-logo.png";
import danaLogo from "../../assets/atm/dana-logo.png";
import {
  CalendarCheck,
  CalendarHeart,
  Clock9,
  Gem,
  MailOpen,
  MapPin,
  MessageCircleHeart,
  UsersRound,
} from "lucide-react";
import CardAtm from "../atm/CardAtm";
import SayingInput from "../sample1/SayingInput";
import SayingList from "../sample1/SayingList";
import BtnSound from "../sample1/BtnSound";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

const FatonahSuryadiMainInvitation = ({
  isOpen,
  togglePlayPause,
  isPlaying,
}) => {
  const weddingEventData = {
    weddingDate: new Date("2025-11-20"),
    weddingTime: "08:00 - 10:00",
    receptionDate: new Date("2025-11-20"),
    receptionTime: "10:00 - 16:00",
  };

  const bankAccounts = [
    {
      accountNumber: "2832859452",
      name: "Suryadi",
      bankLogo: bcaLogo,
    },
    {
      accountNumber: "08988157452",
      name: "Siti Fatonah",
      bankLogo: danaLogo,
    },
  ];

  const handleSaveDate = () => {
    const title = "Pernikahan Suryadi & Fatonah 💍";
    const startDate = weddingEventData.weddingDate.toISOString().slice(0, 10);
    const endDate = weddingEventData.receptionDate.toISOString().slice(0, 10);
    const details = "Bergabunglah dalam hari bahagia kami di Tempat.";
    const location =
      "Kampung Pasir Jambu Kaler, RT01, RW06, Desa Sukamanah, Kec. Malangbong, Kabupaten Garut";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    // Redirect ke Google Calendar
    window.open(googleCalendarUrl, "_blank");
  };

  const sendWishes = async (name, message) => {
    const { error } = await supabase
      .from("fatonah_suryadi")
      .insert([{ created_at: new Date(), name: name, wishes: message }]);

    if (!error) {
      fetchWishes();
    }

    return error;
  };

  const [wishesList, setWishes] = useState([]);
  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("fatonah_suryadi")
      .select("*")
      .order("id", { ascending: false });

    if (!error) setWishes(data);
  };

  return (
    <>
      {/* start button sound music */}
      <BtnSound togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
      {/* endbutton sound music */}

      <section
        id="hero"
        className={`h-screen bg-[url(/src/assets/sample2/bg-1.jpg)] bg-center bg-cover relative transition-all duration-500 ease-in-out w-full ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <img
          src={cartoon}
          className="absolute bottom-0 w-[95%] left-1/2 transform -translate-x-1/2"
          alt="cartoon gift"
        />
        <img
          src={ornamenBunga}
          className="absolute bottom-0"
          alt="Ornamen Bunga"
        />
        <div className="z-50 w-full h-full bg-[url(/src/assets/sample2/ornbg-1.png)] bg-bottom bg-origin-border bg-contain bg-no-repeat">
          <div className="pt-10 text-center font-ebGaramond text-stone-700">
            <p>THE WEDDING OF</p>
            <p className="text-[2.5em]">Suryadi & Fatonah</p>
            <p className="tracking-[4.3px] text-[18px]">20 . 11 . 2025</p>
          </div>
        </div>
      </section>

      {/* start do'a */}
      <section className="bg-[#94A2B8] pt-3 pb-20 px-5 relative">
        <hr className="border-gray-200 mb-10" />
        <div className="flex flex-col justify-center items-center text-gray-200 px-5">
          <div className="font-cinzelDecorative text-7xl">
            <span className="block -translate-x-6 translate-y-6">S</span>
            <span className="block translate-x-6 -translate-y-6">F</span>
          </div>
          <img
            src={borderLine2}
            alt="border Line"
            className="h-auto w-52 object-contain"
          />
          <p className="text-center font-ebGaramond mt-5">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir.”
          </p>
          <p className="text-center font-ebGaramond mt-2">QS Ar-Rum: 21</p>
        </div>
      </section>
      {/* end do'a */}

      {/* start bridal profile */}
      <section
        id="couple"
        className="bg-[url(/src/assets/sample2/bg-2.jpg)] bg-center bg-cover relative pb-40"
      >
        <div className="py-24 px-14 flex flex-col justify-center items-center font-ebGaramond text-center text-slate-800">
          <img
            src={bismillahCalligraphy}
            alt="Calligraphy Bismillah"
            className="w-52"
          />
          <p className="font-bold text-[18px] my-3">
            Assalamu'alaikum Warahmatullaahi Wabarakaatuh
          </p>
          <p className="text-[16px] font-medium">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
            pernikahan kami.
          </p>

          <div className="mt-16 w-40 h-40 border-2 border-gray-500 rounded-full overflow-hidden shadow-lg">
            <img src={avatarIkhwan} alt="Avatar Ikhwan" />
          </div>
          <p className="mt-6 font-tangerine text-6xl font-bold">Suryadi</p>
          <p className="font-semibold text-2xl">Suryadi</p>
          <p className="leading-5">
            Anak ke Empat dari
            <br />
            Bapak Edi.S alm
            <br />
            dan Ibu Onih
          </p>
          <div className="my-8 flex justify-center items-center gap-4">
            <span className="w-16 h-0 border-b-1"></span>
            <p className="text-5xl">&</p>
            <span className="w-16 h-0 border-b-1"></span>
          </div>
          <div className="w-40 h-40 border-2 border-gray-500 rounded-full overflow-hidden shadow-lg">
            <img src={avatarAkhwat} alt="Avatar Akhwat" />
          </div>
          <p className="mt-6 font-tangerine text-6xl font-bold">Fatonah</p>
          <p className="font-semibold text-2xl">Siti Fatonah</p>
          <p className="leading-5">
            Anak ke Tujuh dari
            <br />
            Bapak Hamim
            <br />
            dan Ibu Siti Julaeha
          </p>
        </div>
        <img
          src={ornamenBunga}
          className="absolute bottom-0 z-0"
          alt="Ornamen Bunga"
        />
      </section>
      {/* end bridal profile */}

      {/* start counting the days  */}
      <section className="bg-[#94A2B8] py-12 px-5 relative">
        <h3 className="text-center text-white text-poppins italic font-normal text-xl my-4">
          SAVE THE DATE
        </h3>
        <Sample1Countdown weddingDate={weddingEventData.weddingDate} />
        <div className="w-full flex justify-center mt-5 mb-4">
          <button
            onClick={handleSaveDate}
            className="text-white transition flex gap-2 justify-center items-center border-t border-b py-2 px-2 font-ebGaramond text-[14px] cursor-pointer"
          >
            <CalendarCheck size={16} /> SAVE THE DATE
          </button>
        </div>
      </section>
      {/* end counting the days  */}

      {/* start wedding event */}
      <section
        id="event"
        className="bg-[url(/src/assets/sample2/bg-1.jpg)] bg-center bg-cover relative"
      >
        <div className="relative z-10 pt-20 pb-60 px-4 md:px-7 flex justify-center flex-col items-center gap-10">
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full border border-[#94A2B8]">
            {/* Sidebar kiri */}
            <div className="bg-[#94A2B8] w-12 flex items-center justify-center">
              <span className="text-white text-2xl text-shadow-2xs font-semibold tracking-widest rotate-[-90deg] whitespace-nowrap">
                AKAD NIKAH
              </span>
            </div>

            {/* Konten kanan */}
            <div className="w-full flex-1 px-5 py-4">
              {/* Tanggal */}
              <div className="flex items-start justify-between">
                <div className="text-[48px] font-serif text-[#d36b74] leading-none">
                  20
                </div>
                <div className="text-right text-sm text-gray-600 font-medium">
                  <div>KAMIS</div>
                  <div className="text-lg font-semibold text-gray-700">
                    NOVEMBER
                  </div>
                  <div>2025</div>
                </div>
              </div>

              <hr className="border-t border-gray-200 my-2" />

              {/* Waktu */}
              <div className="flex items-center text-sm text-gray-700 space-x-1 mt-2">
                <Clock9 size={16} />
                <span>08.00 - 10.00 WIB</span>
              </div>

              {/* Lokasi */}
              <div className="mt-3">
                <div className="font-semibold text-gray-700 text-sm">
                  LOKASI ACARA:
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  Kampung Pasir Jambu Kaler, RT01, RW06, Desa Sukamanah, Kec.
                  Malangbong, Kabupaten Garut
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.526923238711!2d108.09652837499786!3d-7.064734992937784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnNTMuMSJTIDEwOMKwMDUnNTYuOCJF!5e0!3m2!1sid!2sid!4v1762245375134!5m2!1sid!2sid"
                style={{ width: "100%", border: 0, marginTop: "16px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Tombol lokasi */}
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/Be8MPQPiqHWzbkYe8"
                  target="_blank"
                  className="flex justify-center items-center gap-1 text-sm bg-[#94A2B8] text-white px-3 py-1 rounded-full shadow hover:bg-[#8897af] transition"
                >
                  <MapPin size={16} />
                  LOKASI
                </a>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full border border-[#94A2B8]">
            {/* Konten kanan */}
            <div className="w-full flex-1 px-5 py-4">
              {/* Tanggal */}
              <div className="flex items-start justify-between">
                <div className="text-[48px] font-serif text-[#d36b74] leading-none">
                  20
                </div>
                <div className="text-right text-sm text-gray-600 font-medium">
                  <div>KAMIS</div>
                  <div className="text-lg font-semibold text-gray-700">
                    NOVEMBER
                  </div>
                  <div>2025</div>
                </div>
              </div>

              <hr className="border-t border-gray-200 my-2" />

              {/* Waktu */}
              <div className="flex items-center text-sm text-gray-700 space-x-1 mt-2">
                <Clock9 size={16} />
                <span>10.00 - 11.00 WIB</span>
              </div>

              {/* Lokasi */}
              <div className="mt-3">
                <div className="font-semibold text-gray-700 text-sm">
                  LOKASI ACARA:
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  Kampung Pasir Jambu Kaler, RT01, RW06, Desa Sukamanah, Kec.
                  Malangbong, Kabupaten Garut
                  <br />
                  Bandung
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.526923238711!2d108.09652837499786!3d-7.064734992937784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnNTMuMSJTIDEwOMKwMDUnNTYuOCJF!5e0!3m2!1sid!2sid!4v1762245375134!5m2!1sid!2sid"
                style={{ width: "100%", border: 0, marginTop: "16px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Tombol lokasi */}
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/Be8MPQPiqHWzbkYe8"
                  target="_blank"
                  className="flex justify-center items-center gap-1 text-sm bg-[#94A2B8] text-white px-3 py-1 rounded-full shadow hover:bg-[#8897af] transition"
                >
                  <MapPin size={16} />
                  LOKASI
                </a>
              </div>
            </div>

            {/* Sidebar kiri */}
            <div className="bg-[#94A2B8] w-12 flex items-center justify-center">
              <span className="text-white text-2xl text-shadow-2xs font-semibold tracking-widest rotate-[90deg] whitespace-nowrap">
                RESEPSI
              </span>
            </div>
          </div>
        </div>

        <img
          src={ornamenBunga}
          className="z-0 absolute bottom-0"
          alt="Ornamen Bunga"
        />
      </section>
      {/* end wedding event */}

      {/* start doa pengantin */}
      <section className="bg-[#94A2B8] py-14 px-5 relative">
        <div className="bg-white border text-center mx-5 px-3 py-8 font-ebGaramond rounded-lg border-[#e88d92] shadow-lg">
          <p className="text-3xl py-3">Doa Pengantin</p>
          <div className="font-semibold text-[20px] my-2">
            بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى
            خَيْرٍ
          </div>
          <p>
            "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di
            waktu susah dan semoga Allah menyatukan kalian berdua dalam
            kebaikan."
          </p>
          <p>(HR. Abu Dawud no 2130)</p>
        </div>
      </section>
      {/* end doa pengantin */}

      {/* start wedding gift */}
      <section className="bg-[url(/src/assets/sample2/bg-1.jpg)] bg-center bg-cover bg-white/20 bg-blend-overlay relative py-32 px-10">
        <div className="font-ebGaramond text-center mb-7">
          <h3 className="text-4xl py-5">- Wedding Gift -</h3>
          <p>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless.
          </p>
        </div>
        <div className="relative z-10 mb-24">
          {bankAccounts.map((bankAccount, index) => (
            <div className="px-3 py-2 md:px-12" key={index}>
              <CardAtm bankAccount={bankAccount} />
            </div>
          ))}
        </div>
        <img
          src={ornamenBunga}
          className="absolute bottom-0 left-0 right-0"
          alt="Ornamen Bunga"
        />
      </section>
      {/* end wedding gift */}

      {/* start best wishes */}
      <section id="wishes" className="bg-[#94A2B8] py-24 px-2 relative">
        <div className="w-full flex flex-col justify-center items-center font-ebGaramond text-white">
          <img
            src={borderLine2}
            alt="border Line"
            className="h-auto w-52 object-contain"
          />
          <h3 className="text-4xl mt-5 mb-1">BEST WISHES</h3>
          <p>Kirimkan ucapan & do'a restu.</p>
        </div>
        <div className="bg-gray-200 mt-10 pt-12 pb-10 px-5 shadow-xl border-2 border-white rounded-xl">
          <div className="space-y-14">
            <SayingInput sendWishes={sendWishes} />
            <SayingList sayingList={wishesList} />
          </div>
        </div>
      </section>
      {/* end best wishes */}

      {/* start penutup */}
      <section
        id="hero"
        className="h-[800px] bg-[url(/src/assets/sample2/bg-1.jpg)] bg-center bg-cover relative"
      >
        <img
          src={cartoon}
          className="absolute bottom-0 w-[95%] left-1/2 transform -translate-x-1/2"
          alt="cartoon gift"
        />
        <img
          src={ornamenBunga}
          className="absolute bottom-0"
          alt="Ornamen Bunga"
        />
        <div className="z-50 w-full h-full bg-[url(/src/assets/sample2/ornbg-1.png)] bg-bottom bg-origin-border bg-contain bg-no-repeat">
          <div className="font-ebGaramond text-center py-24 px-5 md:px-14 text-stone-700">
            <p className="text-[17px] font-light">
              Ungkapan terima kasih yang tulus dari kami apabila
              Bapak/Ibu/Teman-teman berkenan hadir dan memberikan do’a restu.
            </p>
            <p className="text-[17px] text-stone-800">
              Wassalamualaikum Warahmatullahi Wabarakatuh
            </p>
            <div className="flex items-center justify-center my-6">
              <div className="flex-1 h-px bg-gray-400 mx-4"></div>
              <Gem className="text-gray-600 w-5 h-5" />
              <div className="flex-1 h-px bg-gray-400 mx-4"></div>
            </div>
            <p>Turut berbahagia, segenap keluarga besar</p>
            <p className="text-[2.5em]">Suryadi & Fatonah</p>
          </div>
        </div>
      </section>
      {/* end penutup */}

      {/* start footer */}
      <footer className="bg-[#94A2B8] pb-12 pt-1 md:py-2 px-2 relative text-center">
        <p className="text-neutral-300 font-poppins text-xs">
          &copy; 2025 Made by{" "}
          <a target="_blank" href="https://www.instagram.com/iwan_plamboyan/">
            Iwan Plamboyan
          </a>
        </p>
      </footer>
      {/* end footer */}

      {/* start navbar */}
      <nav className="max-w-lg w-full fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex bg-[#36465e] text-white rounded-t-xl divide-x divide-white overflow-hidden text-xs shadow md:hidden">
        <a
          href="#hero"
          className="w-full flex flex-col px-0.5 py-1.5 justify-center items-center"
        >
          <MailOpen size={16} />
          Cover
        </a>
        <a
          href="#couple"
          className="w-full flex flex-col py-1.5 justify-center items-center"
        >
          <UsersRound size={16} />
          Couple
        </a>
        <a
          href="#event"
          className="w-full flex flex-col py-1.5 justify-center items-center"
        >
          <CalendarHeart size={16} />
          Event
        </a>
        <a
          href="#wishes"
          className="w-full flex flex-col py-1.5 justify-center items-center"
        >
          <MessageCircleHeart size={16} />
          Wishes
        </a>
      </nav>
      {/* end navbar */}
    </>
  );
};

export default FatonahSuryadiMainInvitation;
