import installSection from "../assets/installSection.svg";

const Install = () => {
  return (
    <section className="h-5/6 py-6 mt-32">
      <div className="flex justify-end pr-6">
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
  );
};

export default Install;
