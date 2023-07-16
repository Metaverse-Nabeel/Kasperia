import supplyText from "../assets/supplyText.svg";

const Supply = () => {
  return (
    <section className="bg-black h-5/6 pb-32">
      <div className="flex flex-col gap-6 h-3/4 justify-center pl-8 pt-32">
        <img className="w-1/3" src={supplyText} alt="supplyText" />
        <div className="flex flex-col mt-6 w-1/6">
          <button className="bg-white block rounded-full py-3 px-4 mt-6 text-black uppercase font-medium hover:bg-gray-300 hover:text-white">
            residential
          </button>
          <button className="bg-white block rounded-full py-3 px-4 mt-6 text-black uppercase font-medium hover:bg-gray-300 hover:text-white">
            commercial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Supply;
