// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './style';

// Import Swiper styles
import 'swiper/css';

export function Slider({ title, data }) {
    return (
        <Container>
            <h3>{title}</h3>
            <Swiper
                className='slider'
                spaceBetween={20}
                slidesPerView={2}
            >
                {
                    data.map(meal => (
                        <SwiperSlide className='slide'>{meal.name}</SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    );
};