import project1 from "../assets/featuredProjects/Cowichan.svg";
import project2 from "../assets/featuredProjects/EastHastings.svg";
import project3 from "../assets/featuredProjects/NorthIslandCollege.svg";

const Featured = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-5/6 py-12">
          <img src={project1} alt="project1" className="w-2/3 float-right" />
          <div className="flex flex-col h-1/3 w-full border-l-8 border-black">
            <h4 className="flex flex-wrap w-1/6 pl-2 font-medium text-2xl">
              Cowichan Secondary School
            </h4>
            <p className="flex flex-wrap w-1/6 pl-3 font-light text-xl">
              Duncan, BC
            </p>
          </div>
        </div>
        <div className="h-5/6 py-12">
          <img src={project3} alt="project2" className="w-2/3 float-left" />
          <div className="flex flex-col h-1/3 w-full justify-end items-end border-r-8 border-black">
            <h4 className="flex flex-wrap w-1/6 pr-2 font-medium text-2xl text-right">
              North Island College Student Housing
            </h4>
            <p className="flex flex-wrap w-0.5/6 pr-2 font-light text-xl text-right">
              Courtenay, BC
            </p>
          </div>
        </div>
        <div className="h-5/6 py-12">
          <img src={project2} alt="project3" className="w-4/5 float-right" />
          <div className="flex flex-col h-4/5 w-full border-l-8 border-black">
            <h4 className="flex flex-wrap w-1/6 pl-2 font-medium text-2xl">
              1015 East Hastings
            </h4>
            <p className="flex flex-wrap w-1/6 pl-3 font-light text-xl">
              Vancouver, BC
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
