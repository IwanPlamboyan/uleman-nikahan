import {
  CalendarHeart,
  Film,
  MailOpen,
  MessageCircleHeart,
  UsersRound,
} from "lucide-react";

const Sample1Navbar = () => {
  return (
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
        href="#gallery"
        className="w-full flex flex-col py-1.5 justify-center items-center"
      >
        <Film size={16} />
        Gallery
      </a>
      <a
        href="#wishes"
        className="w-full flex flex-col py-1.5 justify-center items-center"
      >
        <MessageCircleHeart size={16} />
        Wishes
      </a>
    </nav>
  );
};

export default Sample1Navbar;
