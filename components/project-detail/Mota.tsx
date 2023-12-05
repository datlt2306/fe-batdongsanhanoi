"use client"
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { CiWarning } from 'react-icons/ci';
import { BsShare } from 'react-icons/bs';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const Mota = () => {
    return (
        <div>
            <div>
                <a href="#">Bán</a>
                <span> / </span>
                <a href="#">Hà Nội</a>
                <span> / </span>
                <a href="#">Gia Lâm</a>
                <span> / </span>
                <a href="#">Căn hộ chung cư tại Vinhomes Ocean Park Gia Lâm</a>
            </div>
            <div>
                <div>
                    <h1 className=' font-bold text-2xl leading-8 font-[normal] tracking-[-0.2px] text-[#2C2C2C] block  "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder"'>Ban quản lý dự án Vinhomes quỹ căn tháng 10 cắt lỗ chính studio 1PN 2PN 3PN, miễn phí trung gian của không gian </h1>
                </div>
                <div>
                    <span className=' text-sm leading-5 font-[normal] text-[#2C2C2C] block mt-2'>Dự án Vinhomes Ocean Park Gia Lâm, Đường An Đào, Xã Dương Xá, Gia Lâm, Hà Nội</span>
                </div>
                <div className=' box-border px-0 py-[15px] border-y-[#F2F2F2] border-t border-solid border-b'>

                    <div className="flex justify-between">
                        <div className="">
                            <p className=' text-sm leading-5 font-[normal] text-[#999] block'>Mức giá</p>
                            <p className=' text-lg leading-7 font-[normal] text-[#2C2C2C] block mt-1'>1,28 tỷ</p>
                            <p className=' text-xs leading-4 font-[normal] text-[#505050] block'>~27,83 triệu/m²</p>
                        </div>
                        <div className="">
                            <p className=' text-sm leading-5 font-[normal] text-[#999] block'>Diện tích</p>
                            <p className=' text-lg leading-7 font-[normal] text-[#2C2C2C] block mt-1'>46 m² </p>
                        </div>
                        <div className="">
                            <p className=' text-sm leading-5 font-[normal] text-[#999] block'>Phòng ngủ</p>
                            <p className=' text-lg leading-7 font-[normal] text-[#2C2C2C] block mt-1'>1 PN</p>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=" flex">
                            <span className=' text-2xl p-4 float-left'>
                                <button>

                                    <Select>
                                        <HoverCard>
                                            {/* <SelectTrigger> */}
                                            <HoverCardContent className=' p-[-10px] text-[15px] w-[120%]'>
                                                Chia sẻ
                                            </HoverCardContent>
                                            <HoverCardTrigger><BsShare /></HoverCardTrigger>
                                            {/* </SelectTrigger> */}
                                        </HoverCard>
                                        {/* <SelectContent>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectContent> */}
                                    </Select>
                                </button>
                            </span>
                            <span className=' text-2xl p-4 float-left'>
                                <button>
                                    <HoverCard>
                                        <HoverCardContent className=' p-[-10px] text-[15px] w-[120%]'>
                                            Báo xấu đăng tin
                                        </HoverCardContent>
                                        <HoverCardTrigger><CiWarning /></HoverCardTrigger>
                                    </HoverCard>
                                </button>
                            </span>
                            <span className=' text-2xl p-4 float-left'>
                                <button>
                                    <HoverCard>
                                        <HoverCardContent className=' p-[-10px] text-[15px] w-[120%]'>
                                            Lưu tin
                                        </HoverCardContent>
                                        <HoverCardTrigger><AiOutlineHeart /></HoverCardTrigger>
                                    </HoverCard>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' mb-10'>
                    <span className=' font-bold text-2xl py-5 leading-7 font-[normal] tracking-[-0.2px] text-[#2C2C2C] block'>Thông tin mô tả</span>
                    <div>
                        Chuyển nhượng giá tốt. <br />
                        Quỹ căn: Vinhomes - Gia Lâm. <br />
                        <a className=' text-[#007C80]' rel="nofollow" target="_blank" href="https://oceanpark-chuyennhuong.phongduan.com/">https://oceanpark-chuyennhuong.phongduan.com/</a><br />
                        Studio full đồ: 930 triệu. <br />
                        1 ngủ +, full đồ: 1,29 tỷ. <br />
                        2 ngủ, 1VS, full đồ: 1,63 tỷ. <br />
                        2 ngủ, 2VS, full đồ: 1.93 tỷ. <br />
                        2 ngủ + , 2VS,full đồ: 2.050 tỷ. <br />
                        3 ngủ, 2VS, full đồ: 2.580 tỷ. <br />
                        Sổ đỏ chính chủ sang tên ngay. <br />
                        Liên hệ: <span className=' text-[#2C2C2C] bg-[#F2F2F2] rounded h-5` leading-6 box-content mb-0.5 pl-1.5 pr-1  border-[none]'>0969 812 *** <button className=' text-sm leading-5 font-[normal] text-white bg-[#009BA1] content-["Hiện_số"] inline-block rounded ml-2 px-2 py-0.5'> Hiện số </button></span>
                        ngay với tôi để nhận danh sách căn hộ rẻ nhất tháng 10, Miễn phí trung gian 100%.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mota
