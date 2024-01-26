import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "../components/Slide";
import { Card } from "../Models/Card";
import { settings } from "../const";

const Carousel = ({ data }: { data: { program: Card[] } | undefined }) => {
  return (
    <div className="w-[1406] h-[334] m-2 mt-4">
      <div className="mt-4 mb-4">Caroussel Program</div>
      {data && (
        <Slider {...settings}>
          {data.program.map((program) => (
            <>
              <Slide
                key={program.id}
                program={program}
                style={{ display: "flex" }}
              />
              <div className="w-[200px] text-center">{program.name}</div>
            </>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
