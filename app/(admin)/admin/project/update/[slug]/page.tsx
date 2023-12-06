/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IProject } from "@/interfaces/project";
import FormUpload from "@/components/admin/Upload/FormUpload";
import ListFiles from "@/components/admin/Upload/ListImage";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";
import { DeleteImage, upLoadFiles } from "@/app/api/upload";
import { useCategoryQuery } from "@/app/Hooks/categories/useCategoriesQuery";
import axios from "axios";
import { useProjectMutation } from "@/app/Hooks/projects/useProductMutation";
import { useProjectQuery } from "@/app/Hooks/projects/useProductQuery";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

const page = () => {
  const router = useRouter();
  const { slug } = useParams();
  const { data: categories } = useCategoryQuery();
  const listCate = categories?.data?.response?.data;
  // const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsName, setdistrictsName] = useState('');
  const [wardsName, setwardsName] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  //data project id
  const { data, isLoading, isError } = useProjectQuery(slug as any);
  const listInfoProject = data?.data?.project;

  //submitted
  const { form, onSubmit } = useProjectMutation({
    action: "UPDATE",
    onSuccess: () => {
      console.log("Sửa thành công");
      form.reset();
      // router.push("/admin/category");
    },
  });


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
  const onHanldleSubmit = async (value: any) => {

  };

  React.useEffect(() => {
    if (listInfoProject && form) {
      form.reset({
        project_name: listInfoProject?.project_name,
        project_location: listInfoProject?.project_location,
        project_room: listInfoProject?.project_room,
        project_acreage: listInfoProject?.project_acreage,
        project_price: listInfoProject?.project_price,
        map_link: listInfoProject?.map_link,
        // tổng quan
        overview_description: listInfoProject?.description_group?.overview?.overview_description,
        location_description: listInfoProject?.description_group?.location?.location_description,
        location_image_description: listInfoProject?.description_group?.location?.location_image_description,
        //tiện ích
        utilities_title: listInfoProject?.description_group?.utilities?.utilities_title,
        utilities_description: listInfoProject?.description_group?.utilities?.utilities_description,
        utilities_image_description: listInfoProject?.description_group?.utilities?.image[0]?.utilities_image_description,
        //tiện ích mặt bằng
        floor_design_title: listInfoProject?.description_group?.floor_design[0]?.floor_design_title,
        floor_design_image_description: listInfoProject?.description_group?.floor_design[0]?.floor_design_image_description,
        floor_design_description_detail: listInfoProject?.description_group?.floor_design[0]?.floor_design_description_detail,
      });
      console.log("hihi", listInfoProject?.description_group);
    }

    fetchDistricts();
  }, [listInfoProject, slug]);
  return (
    <div className="overflow-x-auto text-black">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onHanldleSubmit)}>
          <div className="min-h-32 lg:col-span-3 ">
            <div className="bg-white border border-slate-300 p-5 rounded-md">
              <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">
                Cập nhật dự án
              </h2>
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 p-4">
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="project_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="tên dự án" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Danh mục
                  </label>
                  <select
                    // {...register("categoryId")}
                    // value={watch("categoryId")}
                    // onChange={(e) => setValue("categoryId", e.target.value)}
                    className="w-full h-full min-h-[30px] px-2 border border-slate-300 rounded-md"
                  >
                    <option value="">chọn</option>
                    {listCate?.map((cat: any) => {
                      return (
                        <option key={cat._id} value={cat._id}>
                          {cat.category_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="project_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Giá dự án</FormLabel>
                        <FormControl>
                          <Input placeholder="giá dự án" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="project_acreage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Diện tích</FormLabel>
                        <FormControl>
                          <Input placeholder="diện tích" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="project_room"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số phòng</FormLabel>
                        <FormControl>
                          <Input placeholder="Số phòng" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Quận/Huyện
                  </label>
                  <select
                    // {...register("project_district")}
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <option value="">chọn</option>
                    {districts?.map((item: any) => {
                      return (
                        <option key={item?.code} value={item.code}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Phường
                  </label>
                  <select
                    // {...register('project_wards')}
                    value={selectedWard}
                    onChange={handleWardChange}
                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    {wards?.map((item: any) => (
                      <option key={item?.code} value={item?.code}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="project_location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Địa chỉ cụ thể</FormLabel>
                        <FormControl>
                          <Input placeholder="Địa chỉ cụ thể" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* mô tả dự án */}
                <div className="col-span-2">
                  <label htmlFor="" className="block text-sm font-medium mb-2">
                    Mô tả dự án
                  </label>
                  <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1">
                    <FormField
                      control={form.control}
                      name="overview_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tổng quan</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tổng quan" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid justify-start">
                      <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                        <Label htmlFor="anhtongquan">Ảnh tổng quan</Label>
                        <Input id="anhtongquan" className="w-full" type="file" />
                      </div>
                    </div>
                  </div>

                  {/* vị trí */}
                  <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                    <FormField
                      control={form.control}
                      name="location_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vị trí</FormLabel>
                          <FormControl>
                            <Input placeholder="Vị trí" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid justify-start">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="anhvitri">Ảnh vị trí</Label>
                        <Input id="anhvitri" className="w-full" type="file" />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="location_image_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mô tả hình ảnh</FormLabel>
                          <FormControl>
                            <Input placeholder="Mô tả hình ảnh" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>


                  {/* tiện ích */}
                  <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1 mt-2">
                    <label htmlFor="overviewDescription">Tiện ích:</label>
                    <FormField
                      control={form.control}
                      name="utilities_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tiêu đề tiện ích</FormLabel>
                          <FormControl>
                            <Input placeholder="Tiêu đề tiện ích" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="utilities_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mô tả tiện ích</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Mô tả tiện ích" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Ảnh tiện ích</Label>
                        <Input id="picture" className="w-full" type="file" />
                      </div>
                      <FormField
                        control={form.control}
                        name="utilities_image_description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mô tả hình ảnh tiện ích</FormLabel>
                            <FormControl>
                              <Input placeholder="Tiêu đề" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Thiết kế mặt bằng */}
                  <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-2 mt-2">
                    <label htmlFor="overviewDescription">
                      Thiết kế mặt bằng:
                    </label>
                    <FormField
                      control={form.control}
                      name="floor_design_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tiêu đề</FormLabel>
                          <FormControl>
                            <Input placeholder="Tiêu đề" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid justify-start">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="anhmatbang">Ảnh mặt bằng</Label>
                        <Input id="anhmatbang" className="w-full" type="file" />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="floor_design_image_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mô tả hình ảnh thiết kế mặt bằng</FormLabel>
                          <FormControl>
                            <Input placeholder="Mô tả hình ảnh thiết kế mặt bằng" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="floor_design_description_detail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mô tả chi tiết </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Mô tả chi tiết" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="picture">Ảnh tiện ích</Label>
                      <Input id="picture" className="w-full" type="text" />
                    </div>
                  </div>
                </div>
                {/* End Group Desc */}
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="map_link"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link map</FormLabel>
                        <FormControl>
                          <Input placeholder="link map" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Form uploading */}
                <div className="col-span-2">
                  <FormUpload
                    loading={loading}
                  // handleFileInputChange={handleFileInputChange}
                  // selectedFiles={selectedFiles}
                  />
                  <div
                  // className={
                  //   // selectedFiles?.length
                  //     ? " border-dashed border-2 rounded-[8px] border-[#e5e5e5] "
                  //     : ""
                  // }
                  >
                    <ListFiles
                      // setSelectedFiles={setSelectedFiles}
                      // selectedFiles={selectedFiles}
                      // handleFileInputChange={handleFileInputChange}
                      loading={loading}
                    />
                  </div>
                </div>
                {/* End Form uploading */}
                <div className="col-span-2">
                  <div className="flex  justify-center flex-wrap">
                    {images?.map((image: any) => (
                      <div key={image?.public_id} className="relative  m-4 ">
                        <Image
                          className="rounded-[9px]"
                          src={image?.image_url}
                          width={200}
                          height={100}
                          alt="Image Not Found"
                        />

                        <div
                          className="absolute cursor-pointer p-1 text-xl rounded-bl-lg  text-white top-0  right-0 bg-red-500 hover:bg-red-600"
                        // onClick={() => onCLickDeleteImage(image?.public_id)}
                        >
                          <TiDelete />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-2"></div>
                <div className="col-span-2 mt-6 flex items-center justify-end gap-x-5">
                  <button
                    type="submit"
                    className="cursor-pointer px-3 py-2 text-sm font-semibold text-gray-900"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
