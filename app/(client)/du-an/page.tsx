/* eslint-disable react/display-name */
"use client";
import { BsArrowRight } from "react-icons/bs";
import Proj from "../../../components/admin/projects/project";
import useSWR from "swr";
import Homeslides from "@/components/admin/projects/slided";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

const Project = React.memo(() => {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsName, setdistrictsName] = useState('');
  const [category_name, setcategory_name] = useState('');
  const [status_name, setstatus_name] = useState('');
  const [wardsName, setwardsName] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [keyword, setKeyword] = useState('');

  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const apiUrl = `http://localhost:8080/api/projects?_search=${keyword}&_project_district=${districtsName === "Chọn quận/huyện" || districtsName === '' ? '' : districtsName}&_project_wards=${wardsName === "Chọn xã/phường" || wardsName === '' ? '' : wardsName}&_categoryId=${category_name === "Chọn" || category_name === '' ? '' : category_name}&_status=${status_name === "Chọn" || status_name === '' ? '' : status_name}`;

  const { data, error, isLoading } = useSWR<any, Error, string>(apiUrl, fetcher);

  const ListAllProject = data?.response?.data;

  // Fetch districts of Hanoi
  React.useLayoutEffect(() => {
    fetchDistricts();
    fetchCategories();
  }, []);

  // Function to fetch districts of Hanoi
  const fetchDistricts = async () => {
    try {
      const response = await axios.get('https://provinces.open-api.vn/api/p/01?depth=2');
      setDistricts(response.data.districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  // Function to fetch wards based on selected district
  const fetchWards = async (districtCode: any) => {
    try {
      const response = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
      setWards(response.data.wards);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  // Event handlers for dropdown changes
  const handleDistrictChange = (event: any) => {
    const districtCode = event.target.value;
    const districtName = event.target.options[event.target.selectedIndex].text; // Lấy name của quận/huyện được chọn
    setdistrictsName(districtName);
    setSelectedDistrict(districtCode);
    setSelectedWard('');
    setWards([]);
    fetchWards(districtCode);
  };

  const handleWardChange = (event: any) => {
    const wardCode = event.target.value;
    const wardName = event.target.options[event.target.selectedIndex].text;
    setSelectedWard(wardCode);
    setwardsName(wardName);
  };

  const handleChangeCategory = (event: any) => {
    const categoryCode = event.target.value;
    setcategory_name(categoryCode);
  };
  const handleChangeStatus = (event: any) => {
    const statusCode = event.target.value;
    setstatus_name(statusCode);
  };

  const [categories, setCategory] = useState([]);
  // Function to fetch districts of Hanoi
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BDS_API_CATEGORY}`);
      setCategory(response && response.data.response.data);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const onHandleSearch = (e: any) => {
    setKeyword(e.target.value);
  }

  // if (error) return <div>error</div>;
  // if (isLoading) return <Skeleton />;
  return (
    <div>
      <Homeslides />
      <div className="border p-3 mb-2 max-w-7xl mx-auto hidden lg:block mt-4 ">
        <form className=" grid grid-cols-[30%,12%,12%,12%,12%,12%] w-full items-center mx-auto  justify-between">
          <div className="">
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              onChange={onHandleSearch}
              className="bg-gray-100 outline-none py-2 border w-full rounded-md px-2 "
            />
          </div>
          <div>
            <select id="district-select" className="bg-gray-100 outline-none py-2 border w-full rounded-md " value={selectedDistrict} onChange={handleDistrictChange}>
              <option value="">Chọn quận/huyện</option>
              {districts?.map((item: any) => {
                return (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div>
            <select id="ward-select"
              className="bg-gray-100 outline-none py-2 border w-full rounded-md "
              value={selectedWard} onChange={handleWardChange}>
              <option value="">Chọn xã/phường</option>
              {wards?.map((item: any) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={handleChangeCategory}
              className="bg-gray-100 outline-none py-2 border w-full rounded-md ">
              <option value="">Chọn</option>
              {categories?.map((item: any) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.category_name}
                  </option>
                )
              })}
            </select>
          </div>
          <div>
            <select
              className="bg-gray-100 outline-none py-2 border w-full rounded-md ">
              <option value="" className="text-amber-800">
                Mức giá
              </option>
              <option value="">Dưới 5tr/m2</option>
              <option value="">Trên 5tr/m2</option>
              <option value="">Dưới 10tr/m2</option>
              <option value="">Trên 10tr/m2</option>
            </select>
          </div>
          <div>
            <select
              onChange={handleChangeStatus}
              className="bg-gray-100 outline-none py-2 border w-full rounded-md ">
              <option value="" className="text-amber-800">
                Chọn
              </option>
              <option value="0">Đã bàn giao</option>
              <option value="1">Đã mở bán</option>
              <option value="2">Đang mở bán</option>
            </select>
          </div>
        </form>
      </div>
      <div className="mx-2 max-w-7xl  lg:m-8 lg:grid lg:grid-cols-[75%,30%]">
        <div className=" max-w-7xl mx-auto lg:m-20">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Dự án toàn quốc
            </h1>
          </div>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">Hiện đang có {ListAllProject?.length} dự án</div>
            <div className="border border-solid rounded-md w-full md:w-auto">
              <select className="px-2 md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm hidden md:block">
                <option value="" className="text-amber-800">
                  Mới nhất
                </option>
                <option value="">Mới cập nhật</option>
                <option value="">Giá cao nhất</option>
                <option value="">Giá thấp nhất</option>
              </select>
            </div>
          </div>
          {ListAllProject && ListAllProject.length ? (
            ListAllProject?.map((item: any) => {
              return <Proj key={item?._id} dataProject={item} />;
            })
          ) : (
            <div className="w-full  gap-1 mt-8 p-2 border">
              {/* <div className="w-full h-[290px] grid grid-cols-2 grid-rows-[65%,auto] gap-1">
                <Skeleton className="w-full h-full bg-gray-300 col-span-2" />
                <Skeleton className="w-full h-full bg-gray-300" />
                <Skeleton className="w-full h-full bg-gray-300" />
              </div>
              <div className="flex flex-col justify-between h-full overflow-hidden">
                <Skeleton className="w-[200px] h-[30px] bg-gray-300" />
                <Skeleton className="w-full h-[60px] bg-gray-300" />
                <Skeleton className="w-[100px] h-[30px] bg-gray-300" />
                <Skeleton className="w-full h-[50px] bg-gray-300" />
                <Skeleton className="w-full h-[50px] bg-gray-300" />
              </div> */}
              Không có sản phẩm nào
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between gap-8">
            <h2>Đánh giá dự án</h2>
            <a href="" className="flex gap-2 text-red-600  items-center">
              Xem tất cả <BsArrowRight />
            </a>
          </div>
          <div>
            <Image
              src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
              alt=""
              className="w-full mt-2"
              width={500}
              height={500}
              loading="lazy"
              quality={100}
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between gap-8">
              <h2>Tin tức</h2>
              <a href="" className="flex gap-2 text-red-600 items-center">
                Xem tất cả <BsArrowRight />
              </a>
            </div>
            <div>
              <div className="flex gap-4">
                <Image
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                  alt=""
                  className="w-1/3 mt-2"
                  width={500}
                  height={500}
                  loading="lazy"
                  quality={100}
                />
              </div>
              <div className="mt-6">
                <div className="flex justify-between gap-8">
                  <h2>Tin tức</h2>
                  <a href="" className="flex gap-2 text-red-600 items-center">
                    Xem tất cả <BsArrowRight />
                  </a>
                </div>
                <div>
                  <div className="flex gap-4">
                    <img
                      src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                      alt=""
                      className="w-1/3 mt-2"
                    />
                    <div className="grid items-end">
                      <div className="font-bold">
                        Loạt Thách Thức Khiến Nhà Ở Xã Hội Khó Cán Mốc 1 Triệu
                        Căn Năm 2030
                      </div>
                      <span className="text-gray-400">Hôm nay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Project;
