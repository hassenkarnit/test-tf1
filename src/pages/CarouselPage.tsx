import { useQuery } from "@apollo/client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../containers/Carousel";
import { Card } from "../Models/Card";
import { GET_DATA } from "../const";

const CarouselPage = () => {
  const {
    data,
  }: {
    data: { program: Card[] } | undefined;
  } = useQuery(GET_DATA);

  return <Carousel data={data} />;
};
export default CarouselPage;
