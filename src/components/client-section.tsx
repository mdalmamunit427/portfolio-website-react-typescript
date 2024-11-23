import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const ClientSection = () => {
  return (
    <div className=" bg-gray-light">
      <SectionLayout className="md:py-20">
        <SectionTitle className=" text-center">
          Client <br className=" md:hidden" /> Handled
        </SectionTitle>
        <div className=" space-y-20 mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:flex justify-center items-center gap-20 xl:gap-32 ">
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/lokapin.svg"
              alt="Marketer"
            />
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/tuenhub.svg"
              alt="Marketer"
            />
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/v-point.svg"
              alt="Marketer"
            />
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/cure.svg"
              alt="Marketer"
            />
          </div>
          <div className=" grid grid-cols-2 md:flex justify-center items-center  gap-20 xl:gap-32 ">
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/v-point.svg"
              alt="Marketer"
            />
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/lokapin.svg"
              alt="Marketer"
            />
            <img
              className=" w-[120px] lg:w-[183px] lg:h-[107px]"
              src="/image/client/tuenhub.svg"
              alt="Marketer"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ClientSection;
