"use client"
import React from 'react'
import { FaBed } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { MdOutlinePriceChange } from 'react-icons/md';
import { RiFilePaper2Line } from 'react-icons/ri';
import { PiWarningCircle } from 'react-icons/pi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { MdOutlineHomeRepairService } from 'react-icons/md';




const Thongtin = () => {
    return (
        <div>
            <div>
                <span className=' font-bold text-2xl leading-7 font-[normal] tracking-[-0.2px] text-[#2C2C2C] block'>Đặc điểm bất động sản</span>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-5">
                    <div className="">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 pl-[10%]"><TbRulerMeasure /></td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Diện tích</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">46 m²</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 pl-[10%]"><FaBed /></td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Số phòng ngủ</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">1 Phòng</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 pl-[10%]"><MdOutlinePriceChange /></td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mức giá</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">1,28 tỷ</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 pl-[10%]"><RiFilePaper2Line /></td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pháp lý</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Sổ đỏ.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span className=' font-bold text-2xl pb-5 leading-7 font-[normal] tracking-[-0.2px] text-[#2C2C2C]'>Thông tin dự án</span>
                    <a href="#" className=' float-right text-[rgb(224,60,49)] text-b leading-6 font-bold pr-[5%]'><span> Xem 914 tin đăng bán</span> </a>
                </div>
                <div className='  flex p-4 outline-[1px_solid_#F2F2F2]'>
                    <div className=' lg:w-[15%] md:w-[15%] sm:w-[10%] m-2 ro._unded'>
                        <a href="#">
                            <img className=' w-full rounded' src="https://file4.batdongsan.com.vn/crop/320x320/2021/06/24/20210624111352-242d.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <p className=' font-bold pl-2'>Vinhomes Ocean Park Gia Lâm</p>
                        <div className=' text-sm leading-5 font-[normal] text-[#505050]'>
                            <span className=' inline-flex p-2'>
                                <PiWarningCircle />
                                <span> Đang mở bán</span>
                            </span>
                            <span>
                                <span className=' inline-flex pl-3'>
                                    <HiOutlineHomeModern />
                                    66
                                </span>
                            </span>
                            <div>
                                <span className=' inline-flex pl-2'>
                                    <MdOutlineHomeRepairService />
                                    Tập đoàn Vingroup
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thongtin
