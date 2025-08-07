import CardAtm from "../atm/CardAtm";
import ScrollAnimate from "../framer-motion/ScrollAnimate";

const Sample1WeddingGift = ({ bankAccounts }) => {
  return (
    <section
      className="-mt-[85px] pt-24 pb-5 text-center px-7 bg-[#EAEFEF] opacity-70"
      style={{
        clipPath: "polygon(50% 0, 100% 10%, 100% 100%, 0 100%, 0 10%)",
      }}
    >
      <ScrollAnimate type="slide-up" delay={0.1} duration={1}>
        <h2 className="font-cardo text-4xl text-stone-700">Wedding Gift</h2>
        <p className="my-5 font-poppins font-light">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          melalui:
        </p>
      </ScrollAnimate>

      {bankAccounts.map((bankAccount, index) => (
        <ScrollAnimate type="slide-up" delay={0.1} duration={1}>
          <div className="px-3 py-2 md:px-16" key={index}>
            <CardAtm bankAccount={bankAccount} />
          </div>
        </ScrollAnimate>
      ))}
    </section>
  );
};

export default Sample1WeddingGift;
