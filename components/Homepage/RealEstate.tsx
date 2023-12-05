"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Card } from '../ui/card';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { IProject } from '@/interfaces/project';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { VND } from '@/app/api/project';
import { useProjectQuery } from '@/app/Hooks/projects/useProductQuery';


const RealEstate = () => {
    const { data, isLoading, error } = useProjectQuery();
    const ListAllProject = data?.data?.response?.data;

    const [visibleProduct, setVisibleProduct] = useState(8);
    const hanleLoadMore = () => {
        setVisibleProduct(prevCount => prevCount + 8)
    }
    const productToShow = ListAllProject?.slice(0, visibleProduct);

    if (isLoading) return <Skeleton />
    if (error) return <div>error</div>

    return (
        <Card className='border-none shadow-none rounded-none px-1 '>
            <div className='flex justify-between items-center my-3 md:my-8'>
                <h3 className='font-semibold text-2xl'>Bất động sản dành cho bạn</h3>
                <a href="" className='hover:text-gray-500 text-sm hidden md:block'>Tin nhà đất bán mới nhất </a>
            </div>
            <div className='md:grid md:grid-cols-3 xl:grid-cols-4 gap-7 md:max-w-screen-2xl mx-auto '>
                {productToShow?.map((item: IProject) => {
                    return (
                        <Link href={`/du-an/chi-tiet-du-an/${item._id}`} key={item?._id} className='h-max md:grid gap-2 max-md:p-2 md:flex-none my-1 border  shadow rounded-md '>
                            <p className='text-title text-base font-semibold md:hidden mb-4'>{item?.project_name}</p>
                            <div className=' lg:h-max grid grid-cols-[40%,60%] items-center md:grid-cols-none' >
                                <Image
                                    alt='Anh hihi'
                                    src={item?.project_image[0]?.image_url}
                                    className='md:w-full   rounded md:rounded-t-md'
                                    width={500}
                                    height={500}
                                    objectFit='contain'
                                    loading="lazy"
                                    layout="responsive"
                                    quality={100}
                                />
                                <div className='px-4 pt-2 text-title  ư'>
                                    <div className='hidden md:block'>
                                        <p className='text-title  text-sm font-semibold '>{item?.project_name}</p>
                                    </div>
                                    <p className=' text-red-500 font-semibold text-sm  md:text-lg my-2'>{VND.format(item?.project_price)
                                    } - {item?.project_acreage} m2</p>
                                    <p className='flex items-center gap-1 font-sans text-sm'>
                                        <i><CiLocationOn /></i>
                                        <span>{item?.project_district}</span>
                                    </p>
                                    <p className=' text-gray-500 my-2 md:my-3 flex items-center gap-1'>
                                        <i><AiOutlineFieldTime /></i>
                                        <span className='text-sm'>Đăng hôm nay</span>

                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {visibleProduct < (ListAllProject as any)?.length && (
                <button className='mx-auto flex items-center gap-2 border px-5 py-1 mt-4 md:my-10 md:px-10 rounded-lg border-gray-500 border-solid md:py-3' onClick={hanleLoadMore}>
                    <span>
                        Mở rộng
                    </span>
                    <MdOutlineKeyboardArrowDown />
                </button>
            )}

        </Card>
    )
}

export default RealEstate