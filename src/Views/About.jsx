const About = () => {
  return (
    <>
      <div className="flex justify-between items-center h-5/6 w-full mt-32 px-32">
        <div className="flex flex-col flex-wrap w-48 font-semibold text-7xl">
          who are we?
          <div className="flex py-2 w-24 border-b-8 border-black" />
        </div>
        <div className="flex flex-wrap py-2 w-2/3 font-normal text-4xl text-left">
          We are not just appliance merchants; we are appliance contractors.
          With a team of engineers and drafters, our expertise allows us to
          exclusively serve developers and general contractors with a level of
          understanding and efficiency that sets us apart.
        </div>
      </div>
      <div className="flex flex-col h-5/6 my-32 px-32">
        <div className="flex flex-col justify-start items-end">
          <p className="text-left font-semibold w-1/5 text-7xl">
            mission and vision
            <div className="py-2 w-24 border-b-8 border-black" />
          </p>
        </div>
        <div className="flex py-2 w-1/4 font-normal text-4xl text-left">
          to provide vertically integrated supply and installation for
          commercial and residential appliances on any project.
        </div>
      </div>
    </>
  );
};

export default About;
