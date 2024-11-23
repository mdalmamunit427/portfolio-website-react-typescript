import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const ContactSection = () => {
  return (
    <SectionLayout>
      <SectionTitle className=" text-center">
        Lets talk <br className=" md:hidden" /> with me
      </SectionTitle>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 lg:mt-20 gap-10 lg:gap-28">
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-3 ">
          <img className="w-16 h-16" src="/image/icon/call.svg" alt="call" />
          <div className="">
            <SectionTitle
              size="md"
              className=" text-center md:text-start text-2xl">
              Call
            </SectionTitle>
            <Description className=" text-lg md:text-sm lg:text-lg">
              084524145547
            </Description>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-3">
          <img className=" w-12 h-12" src="/image/icon/email.svg" alt="call" />
          <div className="">
            <SectionTitle
              size="md"
              className=" text-center md:text-start text-2xl">
              Email
            </SectionTitle>
            <Description className=" text-lg md:text-sm lg:text-lg">
              loremipsum@gmail.com
            </Description>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-3">
          <img className="w-12 h-12" src="/image/icon/map.svg" alt="call" />
          <div className="">
            <SectionTitle
              size="md"
              className=" text-center md:text-start text-2xl">
              Location
            </SectionTitle>
            <Description className=" text-lg md:text-sm lg:text-lg">
              Bandung, Indonesia
            </Description>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
