import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Reviews() {

  return (

    <section className="reviews">

      <div className="review-left">

        <Swiper autoplay={{ delay: 2500 }} loop={true}>

          <SwiperSlide className="swi">
            <p>"Amazing coffee and friendly staff!"</p>
          </SwiperSlide>

          <SwiperSlide className="swi">
            <p>"Best cafe experience in the city."</p>
          </SwiperSlide>

          <SwiperSlide className="swi">
            <p>"I visit here every weekend."</p>
          </SwiperSlide>
          
          

        </Swiper>

      </div>

      <div className="review-right">

        <h3>Customer Ratings</h3>

        <p>⭐⭐⭐⭐⭐ Excellent taste</p>
        <p>⭐⭐⭐⭐ Great atmosphere</p>
        <p>⭐⭐⭐⭐⭐ Friendly staff</p>
        <hr />

      </div>

    </section>

  );
}

export default Reviews;