interface SpacingProps {
  isDeskTop: boolean;
}
const Spacing: React.FC<SpacingProps> = ({ isDeskTop }) => {
  return (
    <div
      className={`border-t-[2px] border-white-700 ${isDeskTop ? "mt-32" : "mt-24"
        } flex flex-col items-center mx-10 md:mx-3`}
    ></div>
  );
};

export default Spacing;
import React from "react";

type Spacing1Props = {
  children?: React.ReactNode;
};

export const Spacing1: React.FC<Spacing1Props> = (props) => {
  const { children } = props;
  return <div className="border-t-[2px] border-white-700 mt-48 flex flex-col items-center">{children}</div>;
};

export const Spacing2: React.FC<Spacing1Props> = (props) => {
  const { children } = props;
  return <div className="border-t-[2px] border-white-700 mt-12 flex flex-col items-center">{children}</div>;
};

