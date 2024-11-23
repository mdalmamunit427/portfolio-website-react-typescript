import { Button } from "./common/button";
import { Description } from "./common/description";
import { SectionTitle } from "./common/section-title";

const PromoSection = () => {
  return (
    <div className="py-20 md:py-32  md:max-w-[700px] lg:max-w-[935px] xl:max-w-[1245px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-start items-center w-full">
        <div className="xl:w-[590px] px-5 w-full md:px-20 rounded-lg bg-gray-light items-center py-24 lg:py-12 flex flex-col gap-10">
          <div className="flex justify-start items-start gap-10">
            <img className="w-16 h-16" src="/image/icon/page.svg" alt="call" />
            <div className="flex justify-start items-center gap-8 ">
              <div>
                <SectionTitle size="sm">Landing Page</SectionTitle>
                <Description className="text-sm max-w-60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Description>
              </div>
              <svg
                className=" hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none">
                <path
                  d="M2 2L12 11.2593L2 22"
                  stroke="#132743"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-start gap-10">
            <img
              className="w-16 h-16"
              src="/image/icon/email-merketin.svg"
              alt="call"
            />
            <div className="flex justify-start items-center gap-8 ">
              <div>
                <SectionTitle size="sm">Email Marketing</SectionTitle>
                <Description className="text-sm max-w-60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Description>
              </div>
              <svg
                className=" hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none">
                <path
                  d="M2 2L12 11.2593L2 22"
                  stroke="#132743"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-start gap-10">
            <img
              className="w-16 h-16"
              src="/image/icon/ads-marketing.svg"
              alt="call"
            />
            <div className="flex justify-start items-center gap-8 ">
              <div>
                <SectionTitle size="sm">Ads Marketing</SectionTitle>
                <Description className="text-sm max-w-60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Description>
              </div>
              <svg
                className=" hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none">
                <path
                  d="M2 2L12 11.2593L2 22"
                  stroke="#132743"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-primary mx-5 xl:p-16 rounded-lg p-9 md:p-10 max-w-[400px] xl:max-w-[572px] relative xl:-left-16 lg:-left-10 -top-10 lg:-top-0">
          <SectionTitle className=" text-white max-w-[261px] md:max-w-full">
            Get special promo today only
          </SectionTitle>
          <Description className=" text-white max-w-72 mt-5 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Description>
          <Button size="lg" variant="secondary" className=" mt-10">
            Email me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
