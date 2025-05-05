import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import './Banner.css'

const Banner = () => {


    const bannerInfo = [
        {
            id: 1,
            title: "Learning Beyond Books, Growing Future Leaders",
            description: "Education here is not limited to textbooks alone. We focus on nurturing children's intellect, creativity, and moral values. Today's students are shaped to become tomorrow's successful leaders.",
            image: "https://i.ibb.co.com/qFjshjvG/banner.png"
        },
        {
            id: 3,
            title: "Empowering Young Minds with Knowledge and Values",
            description: "At our school, education goes beyond books. We are dedicated to nurturing intelligence, creativity, and strong moral character in every child—preparing them to become confident and responsible leaders of tomorrow.",
            image: "https://i.ibb.co.com/nqQtk3SC/img.png"
        },
        {
            id: 2,
            title: "Building Character, Creating Leaders",
            description: "We believe true education shapes both the mind and the heart. Our school fosters curiosity, discipline, and values—empowering students to lead with confidence and integrity in the future.",
            image: "https://i.ibb.co.com/1YtQgXDq/banner4.jpg"
        },
    ]



    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerInfo.map(info => (
                        <SwiperSlide>
                            <div style={{ backgroundImage: `url(${info.image})` }} className='flex flex-col justify-center items-left px-20  h-[85vh] bg-center bg-cover'>
                                <div className='w-[40%] space-y-2'>
                                    <h1 className='text-4xl'>{info.title}</h1>
                                    <p>{info.description}</p>
                                    <button className='btn bg-[#219ebc] outline-0 text-white bordr-0'>Apply for Admission</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }

            </Swiper>
        </div>
    );
};

export default Banner;