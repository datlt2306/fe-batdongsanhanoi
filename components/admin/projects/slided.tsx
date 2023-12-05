import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import useSWR from "swr";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";



const Homeslides = () => {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data } = useSWR<any, Error, string>(
    `${process.env.NEXT_PUBLIC_BDS_API}/projects`,
    fetcher
  );
  const ListAllProject = data?.response?.data;

  return (
    <div className="w-full md:h-[400px] lg:h-[550px]">
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slie",
          prevEl: ".button-prev-slie",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {ListAllProject
          ? ListAllProject.map((items: any) => (
            <SwiperSlide key={items?._id}>
              <div className="relative">
                <div className="image">
                  <Image
                    src={items?.project_image[0].image_url}
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                    className="w-full h-full md:h-[500px] lg:h-[550px] object-cover bg-center"
                  />
                </div>
                <div className="absolute top-32  md:top-80 lg:top-80 left-4 md:left-12 lg:left-28 flex flex-col">
                  <div className="border rounded-md w-[100px] px-1 md:w-[150px] md:py-1 md:px-2 lg:w-[150px] bg-[#E7FFF4] lg:py-1 lg:px-2  text-[#07A35D] font-serif">
                    <label htmlFor="">{items?.status === 1 ? "Đang mở bán" : "Đã bàn giao"}</label>
                  </div>
                  <h1 className="font-medium text-sm my-1 md:text-2xl  lg:text-2xl lg:my-3 text-white">{items?.project_name}</h1>
                  <div className="text-[rgba(255,255,255,0.8)] text-xs md:text-lg lg:text-lg">
                    <h2>
                      {items?.project_district} - {items?.project_location}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
          : <div className="relative">
            <div className="image">
              <Skeleton className="w-full h-full md:h-[400px] lg:h-[550px] bg-gray-300 rounded-none" />
            </div>
            <div className="absolute top-32  md:top-80 lg:top-80 left-4 md:left-12 lg:left-28 flex flex-col">
              <Skeleton className="w-[200px] h-[30px] bg-gray-100" />
              <Skeleton className="w-[800px] h-[35px] bg-gray-100 my-3" />
              <Skeleton className="w-[650px] h-[30px] bg-gray-100" />
            </div>
          </div>}
        <div className="top-[50%] absolute z-10 button-next-slie group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-black grid place-items-center">
          <HiArrowSmLeft />
        </div>
        <div className="top-[50%] absolute z-10 button-prev-slie text-white group-hover:right-0 -right-[23rem] duration-500 w-[40px] h-[40px] bg-black grid place-items-center">
          <HiArrowSmRight />
        </div>
      </Swiper>
    </div>
  );
};

export default Homeslides;
