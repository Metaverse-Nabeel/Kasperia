import CommercialImage from "../assets/commercial.svg";

const Commercial = () => {
  return (
    <section className="flex h-screen mt-32">
      <div className="h-full w-3/5">
        <img
          className="h-full w-full object-cover"
          src={CommercialImage}
          alt="Triangle Background"
        />
      </div>
      <div className="flex-col">
        <h2 className="font-thin text-7xl">
          <p className="text-right">Appliance packages</p>
          <p>
            {" "}
            for <span className="text-red-700"> commercial </span> projects:
          </p>
        </h2>
        <div className="flex-col items-center justify-center py-12">
          <p className="text-center text-lg">commercial kitchens</p>
          <div className="border-b-8 rounded-l-lg rounded-r-lg w-12 border-black" />
          <p className="text-center text-2xl">restaurants</p>
          <div className="border-b-8 rounded-l-lg rounded-r-lg w-12 border-black" />
          <p className="text-center text-2xl">soup kitchens</p>
          <div className="border-b-8 rounded-l-lg rounded-r-lg w-12 border-black" />
          <p className="text-center text-2xl">soup kitchens</p>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
