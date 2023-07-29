import { Carousel } from "antd";
import supplyDotBg from "../assets/supplyDotBg.svg";

const sectionsData = [
  {
    title: "Schematic Design: SoR",
    content: (
      <div>
        <p className="mt-5">
          collaborate with designers to create a comprehensive statement of
          requirements (SoR) for appliances. This service is entirely
          complimentary and can be completed before tendering the scope. Our
          analysis ensures that:
        </p>
        <ul className="list-decimal pt-5 pl-5 mb-4">
          <li>
            Requirements consider project-specific needs such as high-end vs
            value products, color scheme, and energy requirements.
          </li>
          <li>
            Space constraints based on architectural drawings are taken into
            account.
          </li>
          <li>
            Product relationships are considered (e.g., ranges do not require
            separate wall ovens, but cooktops do).
          </li>
          <li>
            Requirements do not contradict one another, preventing different
            requirements for the same product.
          </li>
          <li>
            The requirements do not excessively filter out products, ensuring a
            wide range of suitable appliances are available.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Detailed Design Stage: FF&E",
    content: (
      <div>
        <p className="mt-5">
          During the detailed design stage, we team up with the interior
          designer to create a cost-free quantity take-off, which includes
          listing product models, their locations, and quantities, and
          requirements in coordination with the latest set of architectural and
          ID drawings as well as the SoR.
        </p>
      </div>
    ),
  },
  {
    title: "Issue for Tender: Dynamic and Simple Quoting",
    content: (
      <div>
        <p className="mt-5">
          We offer dynamic and simple quotes that adapt as your project evolves.
          We maintain coordination with the design team to keep an updated
          quantity take-off and revise our supply package as necessary. This
          ensures that changes are smoothly incorporated without disrupting your
          project timeline.
        </p>
      </div>
    ),
  },
  {
    title: "Why Choose Us",
    content: (
      <div>
        <p className="mt-5">
          You can engage us at any point in the project cycle, and essentially
          hire a free project coordinator for the appliance scope. One less
          division to worry about.
        </p>
      </div>
    ),
  },
];

const Supply = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <section className="bg-black  pb-32">
      <Carousel onChange={onChange}>
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className="!flex h-[700px] items-center justify-center relative bg-black w-full text-white mt-28 px-16"
          >
            <div className="right-[47%] top-[-65px] absolute h-[550px] w-[600px] -z-1">
              <img src={supplyDotBg} alt="supplyDotBg" />
            </div>{" "}
            <div className="w-[60%] pr-36 text-[76px] leading-[76px] font-normal whitespace-pre-line">
              as engineers who{" "}
              <span className="text-[#E61A3F]">
                understand contractor needs
              </span>{" "}
              we:
            </div>
            <div className="w-[50%] flex flex-col gap-2 pl-16  text-[20px] leading-[20px] font-normal">
              <h3>{section.title}</h3>
              {section.content}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Supply;
