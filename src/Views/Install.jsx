import installText from "../assets/installText.svg";
import installSection from "../assets/installSection.svg";

const Install = () => {
  return (
    <section className="h-5/6 py-6 mt-32">
      <div className="flex justify-end">
        <img className="w-3/5 h-32" src={installText} alt="installText" />
      </div>
      <div className="flex justify-center py-6">
        <img className="w-2/3" src={installSection} alt="installSection" />
      </div>
    </section>
  );
};

export default Install;
