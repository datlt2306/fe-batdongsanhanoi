"use client"
import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { FiRefreshCcw } from "react-icons/fi"
import { RiSendPlaneLine } from "react-icons/ri"


const Search = () => {

    return (
        <div className="mt-24 lg:mx-20 font-sans text-sm">
            <form className="hidden lg:block">
                <div className="rounded  p-[20px] bg-[#5E5E5E] " >
                    <div className="rounded-lg   flex ">
                        <div>
                            <select defaultValue={1} className="rounded-l-lg pl-[10px] h-[45px] outline-none border-2 border-r-[#EBEBEB]">
                                <option value="">Tất cả dự án</option>
                                <option value="">Căn hộ chung cư</option>
                                <option value="">Cao ốc văn phòng</option>
                                <option value="">Trung tâm thương mại</option>
                                <option value="">Khu đô thị mới</option>
                                <option value="">Khu phức hợp</option>
                            </select>
                        </div>
                        <div className="h-[45px] rounded-r-lg flex w-full  bg-white " >
                            <input className="outline-none w-[100%] h-full ml-[20px]" type="text" placeholder=" Hà Nội" />
                            <div className=" bg-[#E03C31] rounded-md flex items-center w-[20%] mr-[10px]  my-auto h-[30px] text-white"> <p className="my-auto ml-[10px] mr-[5px]"><BiSearch /></p> <p className="my-auto  ">Tìm Kiếm</p></div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-[20px]">
                        <select name="" id="" defaultValue={1} className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border ">
                            <option value="" className="text-[#303030]">Hà Nội</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <select name="" id="" defaultValue={1} className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border ">
                            <option value="" className="text-[#303030]">Mức Giá</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <select name="" id="" defaultValue={1} className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border">
                            <option value="" className="text-[#303030]">Diện Tích</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <select name="" id="" defaultValue={1} className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border">
                            <option value="" className="text-[#303030]">Lọc Thêm</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <button className="m-auto text-white">
                            <FiRefreshCcw />
                        </button>
                    </div>
                </div>
            </form>
            <form className="md:hidden mt-44 mx-2 my-2" >
                <div className="relative ">
                    <input
                        type="text"
                        id="search"
                        className="block w-full p-3 mt-3  text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nhập email của bạn"
                        required
                    />
                    <button

                        type="submit"
                        className=" text-white absolute  right-2.5 bottom-2 bg-[#E03C31] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <RiSendPlaneLine />
                    </button>

                </div>
            </form>

        </div >
    )
}

export default Search