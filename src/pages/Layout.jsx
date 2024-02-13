import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'
import './pagination.css'
// import 'swiper/css/pagination';

import './styles.css';
import { product, profile } from '../component/Details/Details';
import { Link } from 'react-router-dom';
const Layout = () => {
    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className='py-5 px-5'>
                    <Swiper
                        Pagination={true}
                        navigation={true}
                        slidesPerView={12}
                        modules={[Navigation, Pagination]}
                        className="mySwiper p-4"

                    >
                        {
                            profile.map((item) => {
                                return (

                                    <SwiperSlide>

                                        <div className='flex '>
                                            <div className='' >
                                                <figure className='  '>
                                                    <Link to={`/login`} href="/login">
                                                    <img src={item.image} className='w-[50px] h-[50px] outline outline-[#CA6E95] p-[2px]  rounded-full overflow-hidden object-cover ' alt="" />
                                                    <figcaption className='text-sl py-2 text-center'>
                                                        <p>{item.name}</p>
                                                        <p>{item.detail}</p>

                                                    </figcaption>
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>



                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        product.map((item) => {
                            return (
                                <>

                                    <SwiperSlide className='  flex justify-center items-center'>
                                        <Link className='' to={`/product/` + item.model} href={`/product/` + item.name}>
                                            <div className=''>
                                                <figure className=' flex flex-col items-center'>
                                                    <img src={item.image} className='w-[50%] bg-black' alt="" />
                                                    <figcaption className=' text-center text-xl font-bold'>
                                                        <p>{item.name}</p>
                                                        <p>{item.model}</p>
                                                    </figcaption>

                                                </figure>

                                            </div>

                                        </Link>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }

                </Swiper>



            </div>
        </div>

    )
}
const Profile = () => {
    return (
        <div>

        </div>
    )
}

export default Layout