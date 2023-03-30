import { Carousel } from "react-responsive-carousel";
import "./styles.css";

export const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      transitionTime={500}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src="/banners/sticker-carousel.png" alt="" />
      </div>
      <div>
        <img src="/banners/card-visit-carousel.png" alt="" />
      </div>
      <div>
        <img src="/banners/impression-UV-carousel.png" alt="" />
      </div>
    </Carousel>
  );
};
