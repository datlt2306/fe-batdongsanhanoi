"use client";
import RelatedProducts from "@/components/admin/ProjectDetail/RelatedProducts";
import Contact from "@/components/admin/ProjectDetail/Contact";
import Remises from "@/components/admin/ProjectDetail/Remises";
import Details from "@/components/admin/ProjectDetail/Details";
import Location from "@/components/admin/ProjectDetail/Location";
import { BsShare } from "react-icons/bs";
import React from "react";
import { useParams } from "next/navigation";
import LocationOnTheMap from "@/components/admin/ProjectDetail/LocationOnTheMap";
import { IProject } from "@/interfaces/project";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjectQuery } from "@/app/Hooks/projects/useProductQuery";


const ProjectDetail = React.memo(() => {
  const { id } = useParams<any>();
  const { data } = useProjectQuery(id);
  console.log(data);
  const project = data?.data?.project;
  return (
    <div className="mx-2 max-w-5xl lg:mx-auto mt-20 text-sm">
      <div>
        <div className="my-2">
          <a href="" className="text-[#999] font-[14px] line-[20px]">
            Dự án
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Đồng Nai
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Nhơn Trạch
          </a>
          <span className="text-[#999]"> / </span>
          <a href="">{project?.project_name}</a>
        </div>
        <div className="flex justify-between mb-4">
          {project?.project_name
            ? <h1 className="font-medium text-xl">{project?.project_name}</h1>
            : <Skeleton className="w-[600px] h-[28px] bg-gray-300 " />}
          <div className="hidden md:block">
            <div className="flex  flex-row   items-center px-3 hover:bg-slate-50 border rounded-lg ">
              <div className="mr-2 ">
                <BsShare />
              </div>
              <button> Chia sẻ </button>
            </div>
          </div>
        </div>
        <div className="mb-5 flex gap-2 items-center">
          {project?.project_location
            ? <>
              <a href="">
                {project?.project_location}
              </a>
              <a href="" className="text-[#74150F] font-medium">
                Xem bản đồ
              </a>
            </>
            : <Skeleton className="w-[300px] h-[20px] bg-gray-300" />}
        </div>
        <div className="grid md:grid-cols-2 gap-1 rounded-lg lg:max-h-[280px]">
          <div className="relative w-full">
            {project?.project_image[0]
              ? <Image
                className="w-[100%] h-full max-h-[280px] rounded-l-lg object-cover"
                src={project?.project_image[0]?.image_url}
                alt="image"
                width={500}
                height={500}
                loading="lazy"
                quality={100}
              />
              : <Skeleton className="w-full h-[280px] max-h-[280px] bg-gray-300 rounded-e-none" />}
            {
              project && <div className="absolute top-0 left-0 bg-slate-50 py-1 px-2 border rounded-md m-2 text-[#999] font-serif">
                <label htmlFor="">{project?.status}</label>
              </div>
            }
          </div>
          <div className="grid grid-cols-[70%,29%] gap-1">
            <div>
              {project?.project_image[1] ? <Image
                className="w-full max-h-[280px] object-cover bg-center h-full"
                src={project?.project_image[1]?.image_url}
                alt=""
                width={500}
                height={250}
                loading="lazy"
                quality={100}
              /> : <Skeleton className="w-full h-[280px] max-h-[280px] bg-gray-300 rounded-none" />}
            </div>
            <div className="grid grid-rows-2 gap-1 ">
              <div>
                {project?.project_image[2]
                  ? <Image
                    className="w-full max-h-[138px] object-cover h-full rounded-tr-lg"
                    src={project?.project_image[2]?.image_url}
                    alt=""
                    width={500}
                    height={500}
                    loading="lazy"
                    quality={100}
                  />
                  : <Skeleton className="w-full h-[138px] max-h-[138px] bg-gray-300 rounded-none rounded-tr-lg" />}
              </div>
              <div>
                {project?.project_image[3]
                  ? <Image
                    className="w-[100%] h-full max-h-[138px] object-cover rounded-br-lg bg-center"
                    src={project?.project_image[3]?.image_url}
                    alt=""
                    width={500}
                    height={500}
                    loading="lazy"
                    quality={100}
                  />
                  : <Skeleton className="w-full h-[138px] max-h-[138px] bg-gray-300 rounded-none rounded-br-lg" />}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3 md:block hidden">
          {project
            ? <ul className="flex gap-10">
              <li>
                <a href="">
                  <div className="flex-col">
                    <h4 className="font-medium">Tổng quan</h4>
                    <span>Giới thiệu về dự án</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex-col">
                    <h4 className="font-medium">Mặt bằng dự án</h4>
                    <span>Tổng thể hạ tầng</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex-col">
                    <h4 className="font-medium">Vị trí</h4>
                    <span>Bản đồ dự án</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="">
                  <div className="flex-col">
                    <h4 className="font-medium">Dự án liên quan</h4>
                    <span>Dự án xung quanh</span>
                  </div>
                </a>
              </li>
            </ul>
            : <Skeleton className="w-[600px] h-[40px] bg-gray-300" />}
        </div>
      </div>
      <div className="grid md:grid-cols-[60%,35%] gap-2 md:gap-[5%] lg:gap-[5%] mt-[40px]">
        <div>
          {project?.project_name
            ? <h2 className="font-medium text-lg">
              {project?.project_name}
            </h2>
            : <Skeleton className="w-[600px] h-[28px] bg-gray-300 " />
          }
          <div className="my-[13px] text-sm">
            {project
              ? <div className="flex gap-5">
                <label>
                  <h4>Diện tích</h4>
                </label>
                <span>{project?.project_acreage}</span>
              </div>
              : <Skeleton className="w-[100px] h-[20px] bg-gray-300" />}
          </div>

          <div className="text-sm mb-[16px]">
            {project
              ? <p>
                <strong className="font-medium text-2xl">
                  {project?.project_name}{" "}
                </strong>
                {project?.project_content}
              </p>
              : <Skeleton className="w-full h-[90px] bg-gray-300" />}
          </div>

          <figure className="text-center text-[#999] ">
            {project?.project_image
              ? <Image
                src={project?.project_image[0]?.image_url}
                alt=""
                width={500}
                height={500}
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL="data:/placeholder-image.png"
                className="w-full"
              />
              : <Skeleton className="w-full h-[350px] bg-gray-300" />}
            <figcaption className="mt-3 mb-5">
              <i>
                {/* {
                  project?.description_group
                } */}
              </i>
            </figcaption>
          </figure>
          <h3 className="font-medium text-lg">Vị trí</h3>

          <Location data={project} />

          <Details />

          <h2 className="font-medium text-lg mb-4">Mặt bằng dự án</h2>
          <Remises />
          <h2 className="font-semibold mt-6">
            Vị trí dự án Khu dân cư Phú Thịnh 1
          </h2>
          <LocationOnTheMap />
        </div>
        <Contact />
      </div>
      <hr className="mt-6" />
      <RelatedProducts />
    </div>
  );
});
export default ProjectDetail;
