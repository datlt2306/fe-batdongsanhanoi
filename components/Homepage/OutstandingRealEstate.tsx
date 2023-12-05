"use client"
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Card } from '../ui/card'
import Image from 'next/image'

const OutstandingRealEstate = () => {

    return (
        <div>
            <div className='flex justify-between items-center my-8   '>
                <h3 className='font-semibold text-lg md:text-2xl'>Dự án bất động sản nổi bật</h3>
                <a href="" className='text-red-500 text-sm flex items-center gap-1'>
                    <span>
                        Xem thêm
                    </span>
                    <MdOutlineArrowRightAlt />
                </a>
            </div>
            <Card className='grid grid-cols-1  mx-1 md:grid-cols-2 xl:grid-cols-4 gap-5  overflow-x-auto border-none rounded-none shadow-none' >
                <div className='w-full shadow rounded-md'>
                    <Image
                        src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className='w-full'
                        loading='lazy'
                        quality={100}
                    />
                    <div className='p-3 '>
                        <span
                            className='font-semibold truncate rounded  text-green-600 text-xs bg-green-100 px-1 py-1'
                        >
                            Đang mở bán
                            <span>- 10/2023: Mở bán phân khu mới</span>
                        </span>

                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
                <div className='w-full shadow rounded-md'>
                    <Image
                        src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className='w-full'
                        loading='lazy'
                        quality={100}
                    />
                    <div className='p-3 '>
                        <span
                            className='font-semibold truncate rounded  text-green-600 text-xs bg-green-100 px-1 py-1'
                        >
                            Đang mở bán- <span>- 10/2023: Mở bán phân khu mới</span>
                        </span>

                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
                <div className='w-full shadow rounded-md'>
                    <Image
                        src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className='w-full'
                        loading='lazy'
                        quality={100}
                    />
                    <div className='p-3 '>
                        <span className='font-semibold truncate rounded  text-green-600 text-xs bg-green-100 px-1 py-1' >Đang mở bán</span>
                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default OutstandingRealEstate