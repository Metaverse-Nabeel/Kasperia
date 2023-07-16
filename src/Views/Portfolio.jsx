import Featured from "../components/Featured";

const Portfolio = () => {
  return (
    <section className="h-5/6 py-6 mt-32">
      <h2 className="font-bold text-6xl px-16">
        featured <span className="font-thin text-6xl">projects</span>
      </h2>
      <Featured />
    </section>
  );
};

export default Portfolio;
