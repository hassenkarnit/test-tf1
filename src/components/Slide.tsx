import CSS from "csstype";
import { Card } from "../Models/Card";
import "./../index.css";
import PlusBox from "./PlusBox";

const Slide = (props: {
  className?: string | undefined;
  style?: CSS.Properties | undefined;
  program: Card;
}) => {
  const { program } = props;

  return (
    <div className={`flex relative flex-col justify-center items-center`}>
      <div
        className={`h-[266px] w-[200px] flex flex-col relative justify-center align-items-center`}
        key={program.id}
      >
        <img
          src={program.thumnail.url}
          alt={program.thumnail.alt}
          className="rounded-lg h-[266px] w-[200px]"
        />

        <PlusBox />
      </div>
      {/* <div className="w-[200px] text-center">{program.name}</div> */}
    </div>
  );
};

export default Slide;
