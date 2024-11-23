import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";
import { Description } from "./common/description";
import useWindowSize from "../hooks/useWindowSize";

const members = [
  {
    name: "Lucky Ferdiand",
    role: "Ceo of Plesiran",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/client/client-1.png",
  },
  {
    name: "Luis Ferdinand",
    role: "Internet marketer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/client/client-2.png",
  },
  {
    name: "Yustiana",
    role: "Ceo of Plesiran",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/client/client-3.png",
  },
];

const MembersSection = () => {
  const { width } = useWindowSize();
  return (
    <div className="relative">
      <SectionLayout className="md:pb-10 xl:pb-16">
        <SectionTitle className=" text-center">What they said</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5 relative">
          {members
            .slice(0, 768 > width ? 1 : members.length)
            .map((member, index) => (
              <div
                className={` p-5 xl:p-10 flex flex-col overflow-hidden rounded-lg pb-10 xl:pb-20 ${
                  index === 0 ? "bg-gray-light" : "bg-white"
                }`}
                key={index}>
                <img
                  className=" w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] rounded-full mx-auto"
                  src={member.image}
                  alt="member"
                />
                <SectionTitle
                  size="md"
                  className=" text-center mt-8 text-2xl md:text-xl lg:text-2xl">
                  {member.name}
                </SectionTitle>
                <Description className=" text-center text-lg md:text-sm lg:text-lg font-semibold">
                  {member.role}
                </Description>
                <Description className="text-center  text-lg md:text-sm lg:text-lg mt-5 xl:mt-8 max-w-[236.589px] md:max-w-72 mx-auto">
                  {member.description}
                </Description>
              </div>
            ))}

          <img
            className="absolute -top-5 -left-14 hidden md:block"
            src="/image/member-section.svg"
            alt="quote"
          />
        </div>
        <div className="w-52 hidden md:block h-52 xl:w-[367px] xl:h-[350px] bg-gray-light absolute right-0 bottom-0 -z-50"></div>
      </SectionLayout>
    </div>
  );
};

export default MembersSection;
