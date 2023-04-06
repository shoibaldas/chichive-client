import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Testimonial = () => {
    const testimonials = [
        {
          id: 1,
          quote:
            "I absolutely love the quality and style of the clothes at Luminous! Their pieces are unique and make me feel confident and fashionable.",
          author: "Emily Smith",
          title: "Fashion Blogger",
          image: "https://i.pravatar.cc/100?img=4",
        },
        {
          id: 2,
          quote:
            "I've been a loyal customer of Luxe for years now and they never disappoint! Their clothes are always on trend and the customer service is amazing.",
          author: "Sophia Chen",
          title: "Fashion Enthusiast",
          image: "https://i.pravatar.cc/100?img=5",
        },
        {
          id: 3,
          quote:
            "I recently purchased a dress from Elegance and I couldn't be happier! The fit was perfect and the quality was top-notch. I received so many compliments when I wore it.",
          author: "Maggie Brown",
          title: "Stylish Mom",
          image: "https://i.pravatar.cc/100?img=6",
        },
        {
          id: 4,
          quote:
            "I'm so glad I discovered Style Avenue! Their clothes are always stylish and comfortable, perfect for my busy lifestyle.",
          author: "Anna Lee",
          title: "Working Professional",
          image: "https://i.pravatar.cc/100?img=7",
        },
        {
          id: 5,
          quote:
            "I never used to enjoy shopping for clothes until I found Chic Boutique. Their staff is so helpful and knowledgeable, and I always leave feeling great about my purchases.",
          author: "Karen Kim",
          title: "Fashion Novice",
          image: "https://i.pravatar.cc/100?img=8",
        },
        {
          id: 6,
          quote:
            "As a plus-sized woman, it can be hard to find stylish clothing that fits well. That's why I love Allure - their clothes are not only fashionable but also cater to a range of body types.",
          author: "Jessica Brown",
          title: "Body Positivity Advocate",
          image: "https://i.pravatar.cc/100?img=9",
        },
      ];
      
  return (
    <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-12 ">
        <h2 className="text-3xl font-bold mb-4 relative text-gray-800">
  Hear From Our Happy Customers
  <span className="block h-2 w-48 bg-sky-600 absolute left-1/2 transform -translate-x-1/2 z-10"></span>
</h2>
      <Swiper
        
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteractio: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
            360:{
                slidesPerView:1,
                spaceBetween:30
            },
            768:{
                slidesPerView:2,
                spaceBetween:30
            },
            991:{
                slidesPerView:3,
                spaceBetween:30
            },
        }}
        className="mySwiper"        
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-6 bg-white rounded-lg shadow-md md:h-96 lg:h-80">
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div>
                  <p className="text-gray-800 font-semibold mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default Testimonial;
