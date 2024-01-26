import CSS from "csstype";
import "./../index.css";
import arrowLeft from "../assets/arrowLeft.svg";

const PreviousArrow = (props: {
  className?: string | undefined;
  style?: CSS.Properties | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { onClick } = props;

  return (
    <div
      className={
        " h-[48px] w-[48px] flex justify-center items-center absolute top-[95px] left-[-15px]  bg-[#313132] z-10 hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <div className="h-[30px] w-[30px] flex justify-center items-center">
        <img src={arrowLeft} alt="svg navigation slider" />
      </div>
    </div>
  );
};

export default PreviousArrow;
