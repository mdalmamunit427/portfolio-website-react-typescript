import { Button } from "./common/button";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const serviceData = [
  {
    img: "/image/landing-page.svg",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: "/image/email-marketing.svg",
    title: "Email Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: "/image/ads-marketing.svg",
    title: "Ads Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const ServiceSection = () => {
  return (
    <SectionLayout id="services">
      <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-0 md:items-center">
        <div className=" space-y-2 lg:space-y-3">
          <SectionTitle>Best services</SectionTitle>
          <SectionTitle>from me</SectionTitle>
        </div>
        <Description className=" max-w-[324px] md:max-w-[240px] lg:max-w-[357px] xl:max-w-[387px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Description>

        <Button variant="primary" size="lg">
          Email me
        </Button>
      </div>
      <div className="flex w-full xl:justify-end">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-[122px] mt-16 xl:max-w-[1080px] ">
          {serviceData.map((service, index) => (
            <div key={index} className="flex flex-col items-start text-start">
              <img
                src={service.img}
                alt={service.title}
                className="lg:w-[61px] w-[61px] h-[61px] md:w-[50px] md:h-[50px] lg:h-[61px]"
              />

              <SectionTitle size="md" className="mt-[20px]  ">
                {service.title}
              </SectionTitle>
              <Description className="mt-[10px] max-w-[240px] md:max-w-full ">
                {service.description}
              </Description>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
