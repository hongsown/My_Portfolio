interface SpacingProps {
  isDeskTop: boolean;
}
const Spacing: React.FC<SpacingProps> = ({ isDeskTop }) => {
  return (
    <div
      className={`border-t-[2px] border-white-700 ${
        isDeskTop ? "mt-32" : "mt-24"
      } flex flex-col items-center mx-10 md:mx-3`}
    ></div>
  );
};

export default Spacing;
