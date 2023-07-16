const Footer = () => {
  return (
    <>
      <div className="flex bg-black w-full h-48 justify-center items-center">
        <div className="flex justify-between px-6 items-center bg-white rounded-full w-5/6 h-24">
          <div className="flex justify-center items-center h-1/3">
            <p className="pr-2 border-r-2 border-black font-normal text-xl">
              Contact: 604-324-8940
            </p>
            <p className="pl-2 font-normal text-xl">estimating@kasperia.ca</p>
          </div>
          <div className="flex justify-center items-center h-1/3">
            <p className="pr-2 font-normal text-lg">Follow us:</p>
            <i className="fab fa-linkedin text-black-500 text-2xl px-2"></i>
            <i className="fab fa-twitter text-black-400 text-2xl px-2"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
