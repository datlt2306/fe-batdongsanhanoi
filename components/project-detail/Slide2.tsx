"use client"
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillPinFill } from 'react-icons/bs';

const Slide2 = () => {

    return (
        <div>
            <h1 className='font-bold text-2xl py-3'>Bất động sản dành cho bạn</h1>
            <Slide canSwipe={true} slidesToScroll={1} slidesToShow={window.innerWidth <= 767 ? 2 : 3} indicators={true} autoplay={false}>
                <div className=' border-2 border-solid border-[rgb(240,240,240)] rounded-[7px] m-2 pb-5'>
                    <a href="#">
                        <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/11/20231011152756-3a4c_wm.jpg" alt="" />
                        <div className='p-4 '>
                            <div>
                                <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder", color: "black" }}>QUỸ CĂN CUỐI CÙNG THE TONKIN 1PN + 2PN, 2PN + , 3PN CHỈ 3TỶ9 Ở NGAY T10/2023 - CK 20% - 800 TR GTCH</span>
                            </div>
                            <div>
                                <span className='pr-5 font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>3,96 tỷ</span>
                                <span className='font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>80 m</span>
                            </div>
                            <div className='overflow-hidden text-sm leading-5 font-[normal] text-black'><span className='float-left pt-1'><BsFillPinFill /></span>Nam Từ Liêm, Hà Nội</div>
                            <div>
                                <span className=' text-xs leading-4 font-[normal] block text-[#999] float-left mx-0 my-2'>Đăng hôm qua</span>
                                <span className=' float-right ml-2'><AiOutlineHeart /></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' border-2 border-solid border-[rgb(240,240,240)] rounded-[7px] m-2 pb-5'>
                    <a href="#">
                        <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/11/20231011152756-3a4c_wm.jpg" alt="" />
                        <div className='p-4 '>
                            <div>
                                <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder", color: "black" }}>QUỸ CĂN CUỐI CÙNG THE TONKIN 1PN + 2PN, 2PN + , 3PN CHỈ 3TỶ9 Ở NGAY T10/2023 - CK 20% - 800 TR GTCH</span>
                            </div>
                            <div>
                                <span className=' pr-5 font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>3,96 tỷ</span>
                                <span className=' font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>80 m</span>
                            </div>
                            <div className=' overflow-hidden text-sm leading-5 font-[normal] text-black'><span className='float-left pt-1'><BsFillPinFill /></span>Nam Từ Liêm, Hà Nội</div>
                            <div>
                                <span className='   text-xs leading-4 font-[normal] block text-[#999] float-left mx-0 my-2'>Đăng hôm qua</span>
                                <span className=' float-right ml-2'><AiOutlineHeart /></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' border-2 border-solid border-[rgb(240,240,240)] rounded-[7px] m-2 pb-5'>
                    <a href="#">
                        <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/11/20231011152756-3a4c_wm.jpg" alt="" />
                        <div className='p-4 '>
                            <div>
                                <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder", color: "black" }}>QUỸ CĂN CUỐI CÙNG THE TONKIN 1PN + 2PN, 2PN + , 3PN CHỈ 3TỶ9 Ở NGAY T10/2023 - CK 20% - 800 TR GTCH</span>
                            </div>
                            <div>
                                <span className=' pr-5 font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>3,96 tỷ</span>
                                <span className=' font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>80 m</span>
                            </div>
                            <div className=' overflow-hidden text-sm leading-5 font-[normal] text-black'><span className='float-left pt-1'><BsFillPinFill /></span>Nam Từ Liêm, Hà Nội</div>
                            <div>
                                <span className='   text-xs leading-4 font-[normal] block text-[#999] float-left mx-0 my-2'>Đăng hôm qua</span>
                                <span className=' float-right ml-2'><AiOutlineHeart /></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' border-2 border-solid border-[rgb(240,240,240)] rounded-[7px] m-2 pb-5'>
                    <a href="#">
                        <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/11/20231011152756-3a4c_wm.jpg" alt="" />
                        <div className='p-4 '>
                            <div>
                                <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder", color: "black" }}>QUỸ CĂN CUỐI CÙNG THE TONKIN 1PN + 2PN, 2PN + , 3PN CHỈ 3TỶ9 Ở NGAY T10/2023 - CK 20% - 800 TR GTCH</span>
                            </div>
                            <div>
                                <span className=' pr-5 font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>3,96 tỷ</span>
                                <span className=' font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>80 m</span>
                            </div>
                            <div className=' overflow-hidden text-sm leading-5 font-[normal] text-black'><span className='float-left pt-1'><BsFillPinFill /></span>Nam Từ Liêm, Hà Nội</div>
                            <div>
                                <span className='   text-xs leading-4 font-[normal] block text-[#999] float-left mx-0 my-2'>Đăng hôm qua</span>
                                <span className=' float-right ml-2'><AiOutlineHeart /></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' border-2 border-solid border-[rgb(240,240,240)] rounded-[7px] m-2 pb-5'>
                    <a href="#">
                        <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/11/20231011152756-3a4c_wm.jpg" alt="" />
                        <div className='p-4 '>
                            <div>
                                <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder", color: "black" }}>QUỸ CĂN CUỐI CÙNG THE TONKIN 1PN + 2PN, 2PN + , 3PN CHỈ 3TỶ9 Ở NGAY T10/2023 - CK 20% - 800 TR GTCH</span>
                            </div>
                            <div>
                                <span className=' pr-5 font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>3,96 tỷ</span>
                                <span className=' font-bold text-base leading-[26px] font-[normal] text-[#E03C31] leading-[26px];'>80 m</span>
                            </div>
                            <div className=' overflow-hidden text-sm leading-5 font-[normal] text-black'><span className='float-left pt-1'><BsFillPinFill /></span>Nam Từ Liêm, Hà Nội</div>
                            <div>
                                <span className='   text-xs leading-4 font-[normal] block text-[#999] float-left mx-0 my-2'>Đăng hôm qua</span>
                                <span className=' float-right ml-2'><AiOutlineHeart /></span>
                            </div>
                        </div>
                    </a>
                </div>
            </Slide >
        </div >
    );
};

export default Slide2;


