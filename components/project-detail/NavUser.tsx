"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Formlienhe from '../lienhe/Formlienhe';


const NavUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 fixed w-full z-20 bottom-0 left-0 border-b border-gray-200 dark:border-gray-600 flex justify-center">
                <div className='flex mx-3'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className=' text-white bg-[#009BA1] border text-sm font-[normal] tracking-[-0.2px] px-[15px] py-[7px] rounded-lg border-solid border-[#009BA1] font-extrabold mx-3'>
                    <span>0969 812 662 </span>
                    <span>Sao chép</span>
                </div>
                <div className=' text-[#2C2C2C] bg-white text-sm font-[normal] tracking-[-0.2px] px-[15px] py-[7px] rounded-lg border border-solid border-[#ccc] font-extrabold mx-3' >
                    <button onClick={handleDownloadButtonClick}>Yêu cầu liên hệ lại </button>
                    <Formlienhe
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        message="Đây là thông báo"
                    />
                </div>
            </div>
        </div>
    )
}
export default NavUser
