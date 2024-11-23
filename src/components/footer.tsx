import { Link } from "react-router-dom";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const Footer = () => {
  return (
    <div className="bg-footer-bg text-white">
      <SectionLayout className="xl:py-24">
        <div className=" font-semibold flex flex-col md:flex-row justify-start items-start md:items-center gap-10 md:gap-20 lg:gap-32">
          <img src="/Luis Jocic.svg" alt="logo" className="" />
          <SectionTitle className=" text-white leading-snug font-extrabold md:hidden">
            Digital Marketer Expert
          </SectionTitle>
          <div
            className=" grid grid-cols-2 text-lg md:text-[20px] md:flex justify-start items-center
                   gap-x-20 gap-5  md:gap-10 lg:gap-16">
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <Link to={`#`} key={item} className="">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 mt-10 ">
          <h1 className="hidden md:block text-5xl leading-relaxed xl:leading-snug xl:text-[64px] font-extrabold max-w-[590px]">
            Digital Marketer Expert
          </h1>
          <div className=" w-full font-semibold text-lg md:text-[20px] tracking-[0.5px] gap-5 md:gap-10 xl:gap-32 flex justify-start items-start">
            <div className="space-y-5">
              <p className=" text-secondary">Services</p>
              <p>Landing Page</p>
              <p>Email Marketing</p>
              <p>Ads Marketing</p>
            </div>
            <div className="space-y-5">
              <p className=" text-secondary">Contact</p>
              <p className=" md:hidden">Email</p>
              <p className=" hidden md:block">loremipsum@gmail.com</p>
              <p>Phone</p>
              <p>Social Media</p>
            </div>
          </div>
        </div>
        <p className=" text-lg md:text-[20px] font-semibold mt-20 lg:mt-5">
          2020 Ibey Design. Allright reserved
        </p>
      </SectionLayout>
    </div>
  );
};

export default Footer;
