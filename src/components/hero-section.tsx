import { Button } from "./common/button";
import { SectionTitle } from "./common/section-title";
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <div className="w-full" id="home">
      <Navbar />
      <div className="relative min-h-[440px] lg:min-h-[580px] xl:min-h-[800px] w-full overflow-hidden">
        {/* Blue background section */}
        <div className="absolute hidden md:block left-0 top-0 h-full w-[45%] bg-primary" />
        {/* Diagonal divider */}
        <div
          className="absolute hidden md:block left-[40%] z-50 top-0 h-full w-[10%] bg-primary"
          style={{
            transform: "skew(-10deg)",
          }}
        />

        {/* Content */}
        <div className="md:absolute pt-36 pb-16 md:pb-0 md:pt-0 px-[24px] md:px-0 bg-primary md:bg-transparent w-full md:w-fit text-white z-50 left-[4.2%] xl:left-[7%] top-[28%] xl:top-[25%]">
          <div className=" text-[24px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-extrabold leading-[120%]">
            Hello, I am Luis Jocic
          </div>

          <SectionTitle
            size="xl"
            className="text-white mt-4 xl:mt-5 font-extrabold ">
            Your Digital
          </SectionTitle>
          <SectionTitle
            size="xl"
            className="text-white mt-3 lg:mt-4 xl:mt-5 font-extrabold ">
            Marketer
          </SectionTitle>

          <div className=" max-w-full md:max-w-[301px]  lg:max-w-[401px] xl:max-w-[501px] text-[18px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  leading-[33px] md:leading-[18px] lg:leading-[25px] xl:leading-[33px] mt-[20px] xl:mt-[30px]">
            Our mission is to responsible for ensuring that the website is
            easily found by the target audience
          </div>
          <div className=" mt-[30px] xl:mt-[50px]">
            <Button size="lg" variant="secondary">
              Email me
            </Button>
            <Button size="lg" variant="primary">
              Download CV
            </Button>
          </div>
        </div>

        {/* Image section */}
        <div className="md:absolute -z-50 right-0 top-0 h-[548px] md:h-full md:w-[60%]">
          <img
            src="/hero-banner.png"
            alt="People working together at laptops"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
