"use client"
import React from 'react'
import { Card } from '../ui/card'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const Introduce = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <Slider className='border-none grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-center my-10' {...settings}>
            <div>
                <Link href={''}>
                    <Image
                        className='mx-auto w-[50%]'
                        src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg" alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Bất động sản bán</h5>
                <p className='font-sans text-sm'>Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn, uy tín về các loại hình <Link href={''} className='text-red-500'>bất động sản bán </Link>bất động sản bán
                    tại Việt Nam, bao gồm bán nhà riêng,
                    <Link href={''} className='text-red-500'>  bán nhà mặt tiền </Link>
                    bán nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất,
                    <Link href={''} className='text-red-500'> bán shophouse </Link>
                    bán shophouse và các loại hình BĐS khác.</p>
            </div>
            <div>
                <Link href={''}>
                    <Image
                        className='mx-auto w-[50%]'
                        src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg" alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Bất động sản cho thuê    </h5>
                <p className='font-sans text-sm'>Cập nhật thường xuyên và đầy đủ các loại hình
                    <Link href={''} className='text-red-500'> bất động sản cho thuê  </Link>

                    như: thuê phòng trọ, nhà riêng,
                    <Link href={''} className='text-red-500'>thuê biệt thự </Link>
                    , văn phòng, kho xưởng hay
                    <Link href={''} className='text-red-500'>  thuê mặt bằng </Link>
                    kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.</p>
            </div>
            <div>
                <Link href={''}>
                    <Image
                        className='mx-auto w-[50%]'
                        src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg" alt=""
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100}
                    />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Đánh giá dự án</h5>
                <p className='font-sans text-sm'>Các
                    <Link href={''} className='text-red-500'> video đánh giá </Link>
                    tổng quan dự án cung cấp góc nhìn khách quan của các chuyên gia về những dự án nổi bật tại Việt Nam, giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng hoặc cơ hội đầu tư sinh lời.</p>
            </div>
            <div>
                <Link href={''}>
                    <Image
                        className='mx-auto w-[50%]'
                        width={500}
                        height={500}
                        loading='lazy'
                        quality={100} src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg" alt="" />


                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Wiki BĐS</h5>
                <p className='font-sans text-sm'>Ngoài cập nhật những biến động thị trường, chúng tôi còn cung cấp kiến ​​thức, kinh nghiệm về mua bán, cho thuê, đầu tư, vay mua nhà,
                    <Link href={''} className='text-red-500'> phong thủy </Link>
                    , thiết kế nhà, mọi thông tin cần thiết để dẫn lối người tìm nhà tìm thấy căn nhà mơ ước..</p>
            </div>
        </Slider>
    )
}

export default Introduce