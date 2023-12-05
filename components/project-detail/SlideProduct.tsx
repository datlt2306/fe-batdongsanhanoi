"use client"
import Image from 'next/image';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideProduct = () => {
    const images = [
        "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
        "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
        "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
        "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
    ];


    return (
        <div>
            <Zoom indicators={index => <div className="indicator"></div>} >
                {images.map((image, index) => (
                    <div key={index} className="each-slide-effect lg:h-[400px] md:h-[400px]">
                        <div style={{
                            height: "200px",
                            border: "1%",
                            backgroundImage: "cover",
                        }}>
                            <Image fill objectFit='cover' src={image} alt={''} />
                        </div>
                    </div>
                ))}
            </Zoom>
            <div className="grid grid-cols-5 md:grid-cols-6 gap-1 lg:grid-cols-7 lg:gap-2 mb-6">
                <div className="rounded">
                    <img src="https://file4.batdongsan.com.vn/resize/1275x717/2022/10/15/20221015150526-86e8_wm.jpg" alt="" className='rounded-[4%]' />
                </div>
                <div className="rounded">
                    <img src="https://file4.batdongsan.com.vn/resize/1275x717/2022/10/15/20221015150526-86e8_wm.jpg" alt="" className='rounded-[4%]' />
                </div>
                <div className="rounded">
                    <img src="https://file4.batdongsan.com.vn/resize/1275x717/2022/10/15/20221015150526-86e8_wm.jpg" alt="" className='rounded-[4%]' />
                </div>
                <div className="rounded">
                    <img src="https://file4.batdongsan.com.vn/resize/1275x717/2022/10/15/20221015150526-86e8_wm.jpg" alt="" className='rounded-[4%]' />
                </div>
                <div className="rounded">
                    <img src="https://file4.batdongsan.com.vn/resize/1275x717/2022/10/15/20221015150526-86e8_wm.jpg" alt="" className='rounded-[4%]' />
                </div>
            </div>
        </div>
    );
};

export default SlideProduct;

