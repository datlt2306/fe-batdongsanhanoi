import React from 'react'
import {
    Card,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
const RealEstateByLocation = () => {
    return (
        <Card className='my-5 mt-14 border-none shadow-none  rounded-none'>
            <CardTitle className='font-semibold text-2xl mb-7'>Bất động sản theo địa điểm</CardTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 px-1 gap-5 items-center'>
                <Link href='' className='relative  outline-none'>
                    <img src="https://moc.gov.vn/Images/TinTuc/Old/67/71/677172.jpg" alt="" className='rounded' />
                    <div className='absolute top-0 mt-5 mx-5  text-white group'>
                        <div className=' hover:underline'>
                            <h4 className="scroll-m-20 text-xl  text-white font-semibold tracking-tight">
                                Quận Cầu Giấy
                            </h4>
                            <p className='text-white font-semibold  '>30.000 tin đăng</p>
                        </div>
                        <p className="opacity-0 group-hover:opacity-100 border text-sm text-black  bg-white px-2 rounded py-1 mt-2 ml-10 transition-opacity">
                            Bán nhà quận cầu giấy
                        </p>
                    </div>
                </Link>
                <div className='grid grid-cols-2 gap-4'>
                    <Link href='' className='relative  outline-none'>
                        <img src="https://moc.gov.vn/Images/TinTuc/Old/67/71/677172.jpg" alt="" className='rounded' />
                        <div className='absolute top-0 mt-5 mx-5  text-white group'>
                            <div className=' hover:underline'>
                                <h4 className="scroll-m-20 text-xl  text-white font-semibold tracking-tight">
                                    Quận Cầu Giấy
                                </h4>
                                <p className='text-white font-semibold  '>30.000 tin đăng</p>
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 border text-sm text-black  bg-white px-2 rounded py-1 mt-2 ml-10 transition-opacity">
                                Bán nhà quận cầu giấy
                            </p>
                        </div>
                    </Link>
                    <Link href='' className='relative  outline-none'>
                        <img src="https://moc.gov.vn/Images/TinTuc/Old/67/71/677172.jpg" alt="" className='rounded' />
                        <div className='absolute top-0 mt-5 mx-5  text-white group'>
                            <div className=' hover:underline'>
                                <h4 className="scroll-m-20 text-xl  text-white font-semibold tracking-tight">
                                    Quận Cầu Giấy
                                </h4>
                                <p className='text-white font-semibold  '>30.000 tin đăng</p>
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 border text-sm text-black  bg-white px-2 rounded py-1 mt-2 ml-10 transition-opacity">
                                Bán nhà quận cầu giấy
                            </p>
                        </div>
                    </Link>
                    <Link href='' className='relative  outline-none'>
                        <img src="https://moc.gov.vn/Images/TinTuc/Old/67/71/677172.jpg" alt="" className='rounded' />
                        <div className='absolute top-0 mt-5 mx-5  text-white group'>
                            <div className=' hover:underline'>
                                <h4 className="scroll-m-20 text-xl  text-white font-semibold tracking-tight">
                                    Quận Cầu Giấy
                                </h4>
                                <p className='text-white font-semibold  '>30.000 tin đăng</p>
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 border text-sm text-black  bg-white px-2 rounded py-1 mt-2 ml-10 transition-opacity">
                                Bán nhà quận cầu giấy
                            </p>
                        </div>
                    </Link>
                    <Link href='' className='relative  outline-none'>
                        <img src="https://moc.gov.vn/Images/TinTuc/Old/67/71/677172.jpg" alt="" className='rounded' />
                        <div className='absolute top-0 mt-5 mx-5  text-white group'>
                            <div className=' hover:underline'>
                                <h4 className="scroll-m-20 text-xl  text-white font-semibold tracking-tight">
                                    Quận Cầu Giấy
                                </h4>
                                <p className='text-white font-semibold  '>30.000 tin đăng</p>
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 border text-sm text-black  bg-white px-2 rounded py-1 mt-2 ml-10 transition-opacity">
                                Bán nhà quận cầu giấy
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='my-5 flex gap-5  whitespace-nowrap overflow-x-auto md:overflow-x-hidden '>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>
                <Link href={''} className='text-sm my-5 border px-3 rounded-full bg-gray-100 py-2'>VinHome Smart City</Link>

            </div>

        </Card>
    )
}

export default RealEstateByLocation