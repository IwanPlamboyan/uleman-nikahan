import wave1 from "../../assets/sample1/sample1-wave1.svg";
import sample1AvatarPria from "../../assets/sample1/sample1-avatar-pria.png";
import sample1AvatarWanita from "../../assets/sample1/sample1-avatar-wanita.png";
import ScrollAnimate from "../framer-motion/ScrollAnimate";

const Sample1BridalProfile = () => {
  return (
    <section id="couple" className="relative px-7 py-4 bg-[#45576F]">
      <img
        src={wave1}
        alt="sample1-wave1"
        className="absolute w-full -top-3 left-0 rotate-180"
      />
      <div className="border-2 border-[#C4A17E] border-dashed relative bg-[#F0F0F0] py-8 text-center">
        <ScrollAnimate type="slide-up" delay={0.4} duration={1}>
          <div className="w-48 h-48 border-3 border-[#C4A17E] rounded-full mx-auto flex justify-center items-center overflow-hidden">
            <img src={sample1AvatarPria} alt="Foto pengantin Pria" />
          </div>
          <h2 className="text-[#C4A17E] font-carattere text-5xl italic mt-5">
            Fulan
          </h2>
          <h3 className="font-cardo text-2xl text-stone-800 -mt-1">
            Fulan Subagja
          </h3>
          <p className="font-poppins text-stone-500 leading-4">
            Putra ketiga dari <br /> Bapak Fulan & Ibu Fulanah
          </p>
        </ScrollAnimate>

        <ScrollAnimate type="zoom-in" delay={0}>
          <p className="py-8 font-carattere text-[#C4A17E] text-5xl">- & -</p>
        </ScrollAnimate>

        <ScrollAnimate type="slide-up" delay={0.3} duration={1}>
          <div className="w-48 h-48 border-3 border-[#C4A17E] rounded-full mx-auto flex justify-center items-center overflow-hidden">
            <img src={sample1AvatarWanita} alt="Foto pengantin wanita" />
          </div>
          <h2 className="text-[#C4A17E] font-carattere text-5xl italic mt-5">
            Fulanah
          </h2>
          <h3 className="font-cardo text-2xl text-stone-800 -mt-1">
            Fulanah Cenah
          </h3>
          <p className="font-poppins text-stone-500 leading-4">
            Putra ketiga dari <br /> Bapak Fulan & Ibu Fulanah
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Sample1BridalProfile;
