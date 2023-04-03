import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import { Link } from "react-router-dom";

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
        <img src="public/banners/sticker-carousel.png" alt="" />
      </Link>
      <Link to={`contact/4`}>
        <img src="/banners/card-visit-carousel.png" alt="" />
      </Link>
      <Link to={`contact/3`}>
        <img src="/banners/impression-UV-carousel.png" alt="" />
      </Link>
    </Carousel>
  );
};
