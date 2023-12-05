"use client"
import { BiTimeFive } from "react-icons/bi"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const News = () => {
    function openPage(pageName: string) {
        const tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<Element>;

        for (let i = 0; i < tabcontent.length; i++) {
            (tabcontent[i] as HTMLElement).style.display = "none";
        }
        const pageElement = document.getElementById(pageName);

        if (pageElement) {
            pageElement.style.display = "block";
        }
    }

    useEffect(() => {
        openPage("tinnoibat");
    }, []);

    return (
        <div className="max-w-full  ">
            <div className="lg:mt-40">
                <div className="lg:w-[80%] max-lg:px-1">
                    <div >
                        <div className="flex justify-between items-center text-gray-500 ">
                            <div className="flex gap-5 text-xl lg:text-2xl font-semibold overflow-x-auto lg:overflow-x-hidden  whitespace-nowrap ">
                                <button className="tablink hover:text-black " id="defaultOpen" onClick={() => openPage('tinnoibat')}>Tin nổi bật</button>
                                <button className="tablink hover:text-black " onClick={() => openPage('tintuc')} >Tin tức</button>
                                <button className="tablink hover:text-black" onClick={() => openPage('bdsMyDinh')} >BĐS TPHCM</button>
                                <button className="tablink hover:text-black" onClick={() => openPage('bdsHaNoi')}>BĐS Hà Nội</button>
                            </div>
                            <Link href={''} className="lg:flex gap-1 items-center text-red-500 hover:text-red-400 text-sm hidden ">
                                <p className="mt-[10px]">Xem Thêm</p>
                                <p className="mt-[15px]"><AiOutlineArrowRight /></p>
                            </Link>
                        </div>
                        <div>
                            <div id="tinnoibat" className="tabcontent">
                                <div className="grid lg:grid-cols-[60%,40%] mt-5 lg:gap-4  max-lg:border-b" >
                                    <div className="max-lg:grid max-lg:grid-cols-2 gap-2 justify-between">
                                        <Image
                                            className="rounded mb-5 w-full"
                                            src="https://loremflickr.com/640/481/city"
                                            alt=""
                                            width={500}
                                            height={500}
                                            loading="lazy"
                                            quality={100}
                                        />
                                        <div>
                                            <Link href={''} className=" text-base lg:text-2xl hover:text-gray-500 font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</Link>
                                            <div className="flex mt-3 items-center text-sm text-gray-500"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>
                                        </div>
                                    </div>
                                    <div className="font-normal hidden lg:block">
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tintuc" className="tabcontent">
                                <div className="grid lg:grid-cols-[60%,40%] mt-5 lg:gap-4  max-lg:border-b" >
                                    <div className="max-lg:grid max-lg:grid-cols-2 gap-2 justify-between">
                                        <Image
                                            className="rounded mb-5 w-full"
                                            src="https://loremflickr.com/640/485/city"
                                            alt=""
                                            width={500}
                                            height={500}
                                            loading="lazy"
                                            quality={100}
                                        />
                                        <div>
                                            <Link href={''} className=" text-base lg:text-2xl hover:text-gray-500 font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</Link>
                                            <div className="flex mt-3 items-center text-sm text-gray-500"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>
                                        </div>
                                    </div>
                                    <div className="font-normal hidden lg:block">
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="bdsMyDinh" className="tabcontent">
                                <div className="grid lg:grid-cols-[60%,40%] mt-5 lg:gap-4  max-lg:border-b" >
                                    <div className="max-lg:grid max-lg:grid-cols-2 gap-2 justify-between">
                                        <Image
                                            className="rounded mb-5 w-full"
                                            src="https://loremflickr.com/640/484/city"
                                            alt=""
                                            width={500}
                                            height={500}
                                            loading="lazy"
                                            quality={100}
                                        />
                                        <div>
                                            <Link href={''} className=" text-base lg:text-2xl hover:text-gray-500 font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</Link>
                                            <div className="flex mt-3 items-center text-sm text-gray-500"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>
                                        </div>
                                    </div>
                                    <div className="font-normal hidden lg:block">
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="bdsHaNoi" className="tabcontent">
                                <div className="grid lg:grid-cols-[60%,40%] mt-5 lg:gap-4  max-lg:border-b" >
                                    <div className="max-lg:grid max-lg:grid-cols-2 gap-2 justify-between">
                                        <Image
                                            className="rounded mb-5 w-full"
                                            src="https://loremflickr.com/640/483/city"
                                            alt=""
                                            width={500}
                                            height={500}
                                            loading="lazy"
                                            quality={100}
                                        />
                                        <div>
                                            <Link href={''} className=" text-base lg:text-2xl hover:text-gray-500 font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</Link>
                                            <div className="flex mt-3 items-center text-sm text-gray-500"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>
                                        </div>
                                    </div>
                                    <div className="font-normal hidden lg:block">
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                        <div className="border-b  border-b-[#EEEEEE] hover:text-gray-500 py-2">
                                            <Link href={''} className="  ">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default News