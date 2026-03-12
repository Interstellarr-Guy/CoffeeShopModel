import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HeroSlider() {

  const slides = [
    {
      title: "Fresh Coffee Everyday",
      text: "Start your day with energy",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      title: "Best Beans in Town",
      text: "Premium roasted coffee",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      title: "Relax & Enjoy",
      text: "Perfect place for friends",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    }
  ];

  return (

    <section className="hero">

      <Swiper autoplay={{ delay: 3000 }} loop={true}>

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.img})` }}
            >

              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default HeroSlider;