"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Thongtin5 = () => {
    return (
        <div>
            <div className=' border mb-4 p-[15px] rounded-lg border-solid border-[#F2F2F2] bg-[#F2F2F2]'>
                <a href="#">
                    <h2 className=' text-[#323232] block mb-4 font-medium '>Nhà môi giới trong khu vực </h2>
                    <div className=' flex justify-center items-center mb-4'>
                        <Avatar className='mr-3'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='w-[77%]'>
                            <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder" }}>CÔNG TY CỔ PHẦN ĐỊA ỐC BIGHOMES</span>
                            <span className=' text-sm leading-5 font-[normal] text-[#999] block'>0915221443</span>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center mb-4'>
                        <Avatar className='mr-3'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='w-[77%]'>
                            <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder" }}>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ THƯƠNG MẠI ĐỊA ỐC FLAND</span>
                            <span className=' text-sm leading-5 font-[normal] text-[#999] block'>0934543563</span>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center mb-4'>
                        <Avatar className='mr-3'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='w-[77%]'>
                            <span style={{ "overflow": "hidden", "textOverflow": "ellipsis", "display": "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", fontSize: "14px", fontWeight: "bolder" }}>LÊ TUÂN</span>
                            <span className=' text-sm leading-5 font-[normal] text-[#999] block'>0908611638</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Thongtin5
