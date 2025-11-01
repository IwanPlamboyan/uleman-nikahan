import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import { Clock7 } from "lucide-react";

const SayingList = ({ sayingList }) => {
  dayjs.extend(relativeTime);
  dayjs.locale("id");

  const formatRelativeTime = (dateString) => {
    return dayjs(dateString).fromNow();
  };

  return (
    <div>
      <p className="uppercase font-semibold font-sm">
        {sayingList.length} BEST FRIENDS WISHES
      </p>
      <div className="mt-1 mb-6 relative h-0.5 w-full bg-stone-200">
        <div className="absolute top-0 left-0 h-0.5 w-[60%] bg-stone-800" />
      </div>
      {sayingList.map((saying, id) => (
        <div key={id} className="font-poppins text-[14px]">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-[#cf9058]">{saying.name}</p>
            <span className="text-[12px] text-gray-500">
              <span className="flex items-center gap-1">
                <Clock7 size={13} />
                {formatRelativeTime(saying.created_at)}
              </span>
            </span>
          </div>
          <p>{saying.wishes}</p>
          <hr className="my-3 border-stone-400" />
        </div>
      ))}
    </div>
  );
};

export default SayingList;
