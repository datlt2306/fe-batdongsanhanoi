"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import FormUpload from "@/components/admin/Upload/FormUpload";
import ListFiles from "@/components/admin/Upload/ListImage";
import { DeleteImage, upLoadFiles } from "@/app/api/upload";
import axios from "axios";
import { useCategoryQuery } from "@/app/Hooks/categories/useCategoriesQuery";
import { useProjectMutation } from "@/app/Hooks/projects/useProductMutation";
import { useUserQuery } from "@/app/Hooks/user/infoQuery";
const AddProject = React.memo(() => {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsName, setdistrictsName] = useState('');
  const [wardsName, setwardsName] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const { data } = useUserQuery();
  const idInfoUser = data?.data?.user?._id;


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
  const [loading, setLoading] = useState(false);

  // useState upload image
  const [selectedFiles, setSelectedFiles] = useState<any>([]);

  //----------------------------------------------------------------
  //  Thêm ảnh vào mảng
  const handleFileInputChange = (e: any) => {
    setLoading(true);
    const files = e.target.files;
    const fileList = Array.from(files);
    const uploadDelay = 1500;
    setTimeout(() => {
      setSelectedFiles((prevSelectedFiles: any) => [
        ...prevSelectedFiles,
        ...fileList,
      ]);
      setLoading(false);
    }, uploadDelay);
  };
  // ----------------------------------------------------------------
  const { data: categories } = useCategoryQuery();
  const listCate = categories?.data?.response?.data;

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();
  const { form, onSubmit } = useProjectMutation({
    action: "CREATE",
    onSuccess: () => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Thêm thành công",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset();
      router.push("/admin/project")
    },

  })

  const onHanldSubmit = async (value: any) => {
    try {
      if (Array.isArray(selectedFiles) && selectedFiles?.length === 0) {
        Swal.fire({
          title: "Opps!",
          text: `Bạn chưa chọn ảnh`,
          icon: "error",
          confirmButtonText: "Vui lòng thêm lại dữ liệu",
        });

      } else {
        const responseImages: any = await upLoadFiles(selectedFiles);
        const overViewImage: any = await upLoadFiles(value?.overview_image);
        const loCationImage: any = await upLoadFiles(value?.location_image);
        const outilitiesImage: any = await upLoadFiles(value?.utilities);
        const floor_design_Image: any = await upLoadFiles(value?.floor_design_image);

        onSubmit(
          {
            project_name: value.project_name,
            map_link: value.map_link,
            project_location: value.project_location,
            project_district: value.project_district,
            project_wards: value.project_wards,
            project_price: value.project_price,
            project_acreage: value.project_acreage,
            project_room: value.project_room,
            project_view: value.project_view,
            categoryId: value.categoryId,
            userId: idInfoUser,
            project_image: responseImages,
            description_group: {
              overview: {
                overview_description: value.overview_description,
                overview_image: overViewImage,
              }, // tổng quan
              location: {
                // Vị trí
                location_description: value.location_description,
                location_image: loCationImage,
                location_image_description: value.location_image_description,
              },
              utilities: {
                utilities_title: value.utilities_title,
                utilities_description: value.utilities_description,
                image: [
                  {
                    utilities_image: outilitiesImage,
                    utilities_image_description: value.utilities_image_description,
                  },
                ],
              },
              floor_design: [
                // thiết kế mặt bằng
                {
                  floor_design_title: value.floor_design_title,
                  floor_design_image: floor_design_Image,
                  floor_design_image_description: value.floor_design_image_description,
                  floor_design_description_detail: value.floor_design_description_detail,
                },
              ],
              utilities_additional: [
                {
                  // tiện ích bổ sung
                  utilities_additional_title: value.utilities_additional_title,
                },
              ],
            },
            status: value.status
          }
        )
      }
      // router.push("/admin/project")
    } catch (error) {
      Swal.fire({
        title: "Opps!",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "Vui lòng thêm lại dữ liệu",
      });

    }
  };
  React.useEffect(() => {
    fetchDistricts()
  }, []);
  return (
    <div className="overflow-x-auto text-black">
      <form onSubmit={handleSubmit(onHanldSubmit)}>
        <div className="min-h-32 lg:col-span-3 ">
          <div className="bg-white border border-slate-300 p-5 rounded-md">
            <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">
              Thêm mới dự án
            </h2>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 p-4">
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Tên dự án
                </label>
                <input
                  type="text"
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Tên dự án"
                  {...register("project_name")}
                />
              </div>
              <div className="grid grid-rows-[max-content_auto]">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Danh mục
                </label>
                <select
                  {...register("categoryId")}
                  value={watch("categoryId")}
                  onChange={(e) => setValue("categoryId", e.target.value)}
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
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Giá dự án
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Giá dự án"
                  {...register("project_price")}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Diện tích
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Diện tích"
                  {...register("project_acreage")}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Số phòng trong dự án
                </label>
                <input
                  type="text"
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Số phòng"
                  {...register("project_room")}
                />
              </div>
              <div className="grid grid-rows-[max-content_auto]">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Quận/Huyện
                </label>
                <select
                  {...register("project_district")}
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  id="district-select"
                >
                  <option value="">Chọn quận/huyện</option>
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
                  {...register('project_wards')}
                  value={selectedWard}
                  onChange={handleWardChange}
                  id="ward-select"
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <option value="">Chọn xã/phường</option>
                  {wards.map((item: any) => (
                    <option key={item?.code} value={item?.code}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Địa chỉ cụ thể
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Địa chỉ..."
                  {...register("project_location")}
                />
              </div>

              {/* Start Group Desc */}
              <div className="col-span-2">
                <label htmlFor="" className="block text-sm font-medium mb-2">
                  Mô tả dự án
                </label>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1">
                  <label htmlFor="overviewDescription">Tổng quan:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 "
                    placeholder="Mô tả"
                    type="text"
                    {...register("overview_description")}
                  ></input>
                  <div className="grid justify-start">
                    <input
                      type="file"
                      className="border border-gray-300 rounded-md py-2 px-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
                      {...register("overview_image")}
                    />
                  </div>
                </div>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                  <label htmlFor="overviewDescription">Vị trí:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mb-2"
                    type="text"
                    placeholder="Mô tả"
                    {...register("location_description")}
                  ></input>
                  <div className="grid justify-start">
                    <input
                      type="file"
                      className="border border-gray-300 rounded-md py-2 px-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
                      {...register("location_image")}
                    />
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 my-2"
                    {...register("location_image_description")}

                  ></input>
                </div>
                {/* tien ich */}
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1 mt-2">
                  <label htmlFor="overviewDescription">Tiện ích:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 "
                    placeholder="Tiêu đề"
                    type="text"
                    {...register("utilities_title")}
                  ></input>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-1 mb-1"
                    placeholder="Mô tả"
                    type="text"
                    {...register("utilities_description")}

                  ></input>
                  <div>
                    <div className="grid justify-start">
                      <input
                        type="file"
                        className="border border-gray-300 rounded-md py-2 px-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
                        {...register("utilities_image")}

                      />
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 my-2"
                      placeholder="Mô tả hình ảnh"
                      {...register("utilities_image_description")}

                    ></input>
                  </div>
                </div>

                {/* mat bang */}
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-2 mt-2">
                  <label htmlFor="overviewDescription">
                    Thiết kế mặt bằng:
                  </label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    type="text"
                    placeholder="Tiêu đề"
                    {...register("floor_design_title")}
                  ></input>
                  <div className="grid justify-start">
                    <input
                      type="file"
                      className="border border-gray-300 rounded-md py-2 px-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
                      {...register("floor_design_image")}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Mô tả hình ảnh"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    {...register("floor_design_image_description")}

                  ></input>
                  <input
                    type="text"
                    placeholder="Mô tả chi tiết"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    {...register("floor_design_description_detail")}
                  ></input>
                </div>
                {/* tien ich bo xung */}

                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                  <label htmlFor="overviewDescription">
                    {" "}
                    Tiện ích bổ sung:
                  </label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    placeholder="Tiêu đề"
                    type="text"
                    {...register("utilities_additional_title")}
                  ></input>
                </div>
              </div>
              {/* End Group Desc */}
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Map link
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="http://..."
                  {...register("map_link")}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Trạng thái dự án
                </label>
                <select
                  {...register("status")}
                  defaultValue={1}
                  className="border py-2 w-full px-2"
                >
                  <option value="Sắp mở bán">Sắp mở bán</option>
                  <option value="Đang mở bán">Đang mở bán</option>
                  <option value="Đã bàn giao">Đã bàn giao</option>
                </select>
              </div>
              {/* Form uploading */}
              <div className="col-span-2">
                <FormUpload
                  loading={loading}
                  handleFileInputChange={handleFileInputChange}
                  selectedFiles={selectedFiles}
                />
                <div
                  className={
                    selectedFiles?.length
                      ? " border-dashed border-2 rounded-[8px] border-[#e5e5e5] "
                      : ""
                  }
                >
                  <ListFiles
                    setSelectedFiles={setSelectedFiles}
                    selectedFiles={selectedFiles}
                    handleFileInputChange={handleFileInputChange}
                    loading={loading}
                  />
                </div>
              </div>
              {/* End Form uploading */}

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
                  Thêm mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default AddProject;
