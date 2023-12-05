"use client"

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Formlienhe from './Formlienhe';



const Thongtin1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className=' text-center border mb-4 p-[15px] rounded-lg border-solid border-[#F2F2F2]'>
            <div className='p-7 pl-[40%]'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <p className=' text-xs leading-4 font-[normal] text-[#999] block -mb-1'>Được đăng bởi</p>
            </div>
            <div className=' text-base leading-6 font-[normal] tracking-[-0.2px] whitespace-nowrap overflow-hidden text-ellipsis text-center text-[#2C2C2C] mt-2 font-extrabold'>
                NGYỄN VĂN NAM
            </div>
            <div className=' text-[#2C2C2C] text-sm leading-5 font-[normal]'>
                Xem thêm 6 tin khác
            </div>
            <div className=' text-white bg-[#009BA1] border text-sm leading-5 font-[normal] tracking-[-0.2px] px-[15px] py-[13px] rounded-lg border-solid border-[#009BA1] mt-4  font-extrabold '>
                <span>0969 812 662 </span>
                <span>Sao chép</span>
            </div>
            <div className=' text-[#2C2C2C] bg-white text-sm leading-5 font-[normal] tracking-[-0.2px] px-[15px] py-[13px] rounded-lg border mt-2 border-solid border-[#ccc] font-extrabold'>
                <button>Gửi email</button>

            </div>
            <div className=' text-[#2C2C2C] bg-white text-sm leading-5 font-[normal] tracking-[-0.2px] px-[15px] py-[13px] rounded-lg border mt-2 border-solid border-[#ccc] font-extrabold   ' >
                <button onClick={handleDownloadButtonClick}>Yêu cầu liên hệ lại </button>
                <Formlienhe
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    message="Đây là thông báo"
                />
            </div>
        </div>
    )
}

export default Thongtin1

