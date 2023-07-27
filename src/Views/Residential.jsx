import ResidentialImage from "../assets/residential.svg";

const Residential = () => {
  return (
    <section className="h-screen py-6 mt-32">
      <div className="pl-20">
        <h2 className="font-thin text-7xl">
          <p>Appliance packages</p>
          <p>
            {" "}
            for <span className="text-red-700"> residential </span> projects:
          </p>
        </h2>
      </div>
      <div
        className="h-5/6 bg-auto bg-no-repeat"
        style={{ backgroundImage: `url(${ResidentialImage})` }}
      ></div>
    </section>
  );
};

export default Residential;
