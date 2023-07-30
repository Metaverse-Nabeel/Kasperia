import CommercialImage from "../assets/commercial.svg";

const Commercial = () => {
  return (
    <section className="h-screen mt-32">
      <div
        className="flex-col bg-no-repeat h-full w-full object-cover"
        style={{ backgroundImage: `url(${CommercialImage})` }}
      >
        <h2 className="font-thin text-right text-7xl pr-32">
          <p>Appliance packages</p>
          <p>
            {" "}
            for <span className="text-red-700"> commercial </span> projects:
          </p>
        </h2>
        <div className="flex justify-end items-end pr-48 text-2xl pt-24">
          <div className="flex flex-col items-center">
            <div className="my-1">commercial kitchens</div>
            <div className="h-8 my-1 flex items-center">
              <div className="w-8 h-2 bg-black rounded-full"></div>
            </div>
            <div className="my-1">restaurants</div>
            <div className="h-8 my-1 flex items-center">
              <div className="w-8 h-2 bg-black rounded-full"></div>
            </div>
            <div className="my-1">soup kitchens</div>
            <div className="h-8 my-1 flex items-center">
              <div className="w-8 h-2 bg-black rounded-full"></div>
            </div>
            <div className="my-1">butcher shops</div>
            <div className="h-8 my-1 flex items-center">
              <div className="w-8 h-2 bg-black rounded-full"></div>
            </div>
            <div className="my-1">community centers</div>
            <div className="h-8 my-1 flex items-center">
              <div className="w-8 h-2 bg-black rounded-full"></div>
            </div>
            <div className="my-1">mixed use</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
