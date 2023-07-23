import heroText from "../assets/heroText.svg";
import topSupply from "../assets/topSupply.svg";
import supplyText from "../assets/supplyText.svg";
import installSection from "../assets/installSection.svg";
import heroSection from "../assets/heroSection.svg";
import heroFade from "../assets/heroFade.svg";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-screen w-full mt-28"
        style={{ backgroundImage: `url(${heroSection})` }}
      >
        <div
          className="bg-cover h-screen w-1/2 float-right"
          style={{ backgroundImage: `url(${heroFade})` }}
        >
          <div className="flex h-screen items-center">
            <img className="h-1/5" src={heroText} alt="hero-text" />
          </div>
        </div>
      </section>
      <section className="bg-black h-5/6 pb-32">
        <img className="w-4/5 block mx-auto" src={topSupply} alt="topSupply" />
        <div className="flex flex-col gap-6 h-3/4 justify-center pl-8 mt-32">
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
      <section className="h-5/6 py-6" id="third-section">
        <div className="flex justify-end">
          <div id="installText">
            <p className="text-6xl font-thin text-right">expert,</p>
            <p className="text-6xl font-thin">
              <span className="font-bold">hassle-free </span>
              installation
            </p>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <img className="w-2/3" src={installSection} alt="installSection" />
        </div>
      </section>
      <section className="h-5/6 py-6">
        <h2 className="font-bold text-6xl px-16">
          featured <span className="font-thin text-6xl">projects</span>
        </h2>
        <Featured />
      </section>
    </>
  );
};

export default Home;
