import wave1 from "../../assets/sample1/sample1-wave1.svg";

const Sample1Footer = () => {
  return (
    <footer className="pt-16 text-center text-stone-800">
      <div className="px-5">
        <p className="font-poppins font-light text-sm">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
          kedua mempelai.
        </p>
        <p className="my-5 font-semibold">The Wedding Of</p>
        <p className="my-8 font-carattere text-5xl italic">Fulan & Fulanah</p>
      </div>

      <img src={wave1} alt="sample1-wave1" className="w-full" />
      <div className="w-full pt-3 pb-6 bg-[#132A3C]">
        <p className="text-neutral-300 font-poppins text-xs relative pb-10 md:py-0">
          &copy; 2025 Made by{" "}
          <a target="_blank" href="https://www.instagram.com/iwan_plamboyan/">
            Iwan Plamboyan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Sample1Footer;
