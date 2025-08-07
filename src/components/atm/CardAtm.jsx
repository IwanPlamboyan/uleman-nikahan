import { useState } from "react";
import { CircleCheck, Copy } from "lucide-react";
import chipAtm from "../../assets/atm/chip-atm.webp";

const CardAtm = ({ bankAccount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="w-full min-h-36 p-3 border-2 rounded-2xl border-white text-start font-poppins bg-[#EFEFEF] shadow-lg">
      <div className="flex justify-end">
        <img
          src={bankAccount.bankLogo}
          alt="bank_logo"
          className="h-auto w-14 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <img
          src={chipAtm}
          alt="chip_atm"
          className="h-auto w-8 object-contain"
        />
        <p className="font-semibold mt-1">{bankAccount.accountNumber}</p>
        <p className="font-light -mt-1">{bankAccount.name}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="px-2 py-1 rounded-sm text-sm bg-[#C4A17E] text-white flex gap-1 items-center cursor-pointer"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <CircleCheck size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardAtm;
