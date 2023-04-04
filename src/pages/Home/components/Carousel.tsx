import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import { Link } from "react-router-dom";

import StickerCarousel from "../../../../public/banners/sticker-carousel.png";
import UVCarousel from "../../../../public/banners/impression-UV-carousel.png";
import CardCarousel from "../../../../public/banners/card-visit-carousel.png";

export const CarouselComponent = () => {
  return (
    <Carousel
      dynamicHeight={false}
      autoFocus
      autoPlay
      interval={5000}
      transitionTime={500}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      <Link to={`contact/1`}>
        <img
          src={StickerCarousel}
          alt="Demonstrative banner of a service about Stickers. Clique here and learn more!"
        />
      </Link>
      <Link to={`contact/4`}>
        <img
          src={CardCarousel}
          alt="Demonstrative banner of a service about Visit Cards. Clique here and learn more!"
        />
      </Link>
      <Link to={`contact/3`}>
        <img
          src={UVCarousel}
          alt="Demonstrative banner of a service about UV Printing. Clique here and learn more!"
        />
      </Link>
    </Carousel>
  );
};
