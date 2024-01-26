import { gql } from "@apollo/client";
import NextArrow from "./components/NextArrow";
import PreviousArrow from "./components/PreviousArrow";

export const settings = {
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export const GET_DATA = gql`
  {
    program(limit: 10) {
      id
      name
      thumnail {
        url
        alt
      }
    }
  }
`;
