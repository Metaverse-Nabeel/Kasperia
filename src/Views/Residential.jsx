import ResidentialImage from "../assets/residential.svg";

const Residential = () => {
  return (
    <section className="h-screen mt-32">
      <div className="h-full w-full relative">
        <div className="pl-20">
          <h2 className="font-thin text-7xl">
            <p>Appliance packages</p>
            <p>
              {" "}
              for <span className="text-red-700"> residential </span> projects:
            </p>
          </h2>
          <div className="flex w-1/2 justify-between items-center py-12">
            <span className="text-center text-lg">
              single family <br />
              low-rise/ low-high rise
              <br />
              communities
            </span>
            <span className="border-8 rounded-t-lg rounded-b-lg h-12 border-black" />
            <span className="text-center text-2xl">student housing</span>
            <span className="border-8 rounded-t-lg rounded-b-lg h-12 border-black" />
            <span className="text-center text-2xl">mixed use</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={ResidentialImage}
            alt="Triangle Background"
          />
        </div>
      </div>
    </section>
  );
};

export default Residential;
