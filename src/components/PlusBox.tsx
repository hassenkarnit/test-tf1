import CSS from "csstype";
import "./../index.css";
import cross from "../assets/cross.svg";

const PlusBox = (props: {
  className?: string | undefined;
  style?: CSS.Properties | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { onClick } = props;

  return (
    <div
      className={
        "absolute h-[32px] w-[32px] flex justify-center items-center bg-black/[.70] right-[15px] top-[225px] rounded-lg hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <div className="h-[32px] w-[32px] flex justify-center items-center">
        <img src={cross} alt="svg navigation slider" />
      </div>
    </div>
  );
};

export default PlusBox;
