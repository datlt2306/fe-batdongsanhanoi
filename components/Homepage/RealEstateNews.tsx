"use client"
import React from 'react'

import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../ui/card';
import Image from 'next/image';

const RealEstateNews = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    }
    return (
        <div>
            <h3 className='font-semibold text-2xl mb-8'>Tin tức bất động sản</h3>
            <Slider {...settings}  >
                <Card className='border-none'>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-700">
                            01
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </Card>
                <div>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="  border-b pb-2 text-5xl font-semibold  text-gray-700">
                            02
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </div>
                <div>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-700">
                            03
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </div>
                <div>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-700">
                            04
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </div>
                <div>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-700">
                            05
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </div>
                <div>
                    <Image
                        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/thi-truong-bat-dong-san-mien-tay-1.png"
                        className='rounded w-full'
                        alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                    <div className='flex items-center gap-2 my-3'>
                        <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-700">
                            06
                        </h2>
                        <Link href={''} className="scroll-m-20 text-base font-semibold tracking-tight">
                            Căn Hộ Chung Cư Dần Hiện Hữu Tại Các Đô Thị Lớn Miền Tây
                        </Link>
                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default RealEstateNews