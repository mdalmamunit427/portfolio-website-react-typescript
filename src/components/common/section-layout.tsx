import React from "react";

const SectionLayout = ({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <div
      className={`py-20 md:py-36 px-6 md:px-0 md:max-w-[700px] lg:max-w-[935px] xl:max-w-[1245px] mx-auto ${className}`}  id={id}>
      {children}
    </div>
  );
};

export default SectionLayout;
