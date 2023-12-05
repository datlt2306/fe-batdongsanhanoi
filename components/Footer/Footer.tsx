import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { BsHeadphones } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-[#F2F2F2] ">

      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="font-sans mr-[16px]">
            <div className=" mt-[40px] mb-[32px]">
              <a href="#">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/logo/standard/black/logo_gray-5.svg"
                  alt=""
                  className="w-[226.5px] h-[67.99px]"
                />
              </a>
            </div>
            <div className="text-[#2C2C2C] text-sm font-medium">
              CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM
            </div>
            <div className="flex mt-[12px]  gap-2">
              <div className="pt-1">
                <CiLocationOn size={20} />
              </div>
              <span className="font-medium text-sm">
                Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
              </span>
            </div>
            <div className="flex mt-[12px] items-center gap-2">
              <PiPhoneCallLight size={20} />
              <span className="font-medium text-sm">(024) 3562 5939 - (024) 3562 5940</span>
            </div>
            <div className="">
              <div className="flex gap-2 mt-[50px] items-center ">
                <div>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/footer/google-play.png"
                    alt=""
                    className="w-[110.99px] h-[26.5px]"
                  />
                </div>
                <div>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/footer/app_store.png"
                    alt=""
                    className="w-[110.99px] h-[33.91px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:mt-[40px]  ">
            <div className="grid sm:grid grid-rows gap-3 mt-4 md:grid-cols-[20%,40%,40%]  lg:grid-cols-3  mb-[40px] ">
              <div className="flex gap-1 text-sm">
                <div className="pt-1">
                  <PiPhoneCallLight size={30} />
                </div>
                <div className="grid grid-rows-2">
                  <span>Hotline</span>
                  <span className="font-medium">1900 1881</span>
                </div>
              </div>

              <div className="flex gap-1 text-sm">
                <TbUserQuestion size={30} />

                <div className="grid grid-rows-2">
                  <span>Hỗ trợ khách hàng</span>
                  <span className="font-medium">trogiup.batdongsan.com.vn</span>
                </div>
              </div>

              <div className="flex gap-1 text-sm">
                <BsHeadphones size={30} />

                <div className="grid grid-rows-2">
                  <span>Chăm sóc khách hàng</span>
                  <span className="font-medium">hotro@batdongsan.com.vn</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 text-sm">
              <div className="grid grid-cols-2 gap-3 mt-1">
                <div className="grid grid-rows gap-3">
                  <div className="text-[#2C2C2C] font-medium">HƯỚNG DẪN</div>
                  <a href="">Về chúng tôi</a>
                  <a href="">Bảng giá & số lượng</a>
                  <a href="">Câu hỏi thường gặp</a>
                  <a href="">Góp ý báo lỗi</a>
                  <a href="">Sitemap</a>
                </div>
                <div className="grid grid-rows">
                  <div className="text-[#2C2C2C] font-medium">QUY ĐỊNH</div>
                  <a href="">Quy định đăng tin</a>
                  <a href="">Quy chế hoạt động</a>
                  <a href="">Điều khoản thỏa thuận</a>
                  <a href="">Chính sách bảo mật</a>
                  <a href="">Giải quyết khiếu nại</a>
                </div>
              </div>
              <div className=" mt-5  md:mt-3 lg:ml-5 ">
                <div className="text-[#2C2C2C] font-medium">
                  ĐĂNG KÝ NHẬN TIN
                </div>
                <form>
                  <label
                    form="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative md:w-[357.99px]">
                    <input
                      type="email"
                      id="search"
                      className="block w-full p-3 mt-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div className="mt-4">
                  <div className="font-medium">QUỐC GIA & NGÔN NGỮ</div>
                  <select
                    defaultValue={"US"}
                    id="countries"
                    className="w-[162.78px] bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="h"  >Việt Nam</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="flex  flex-col justify-between my-5 text-sm">
          <ul className="">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center  rounded-lg outline-none text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="shrink-0 transition duration-300 group-open:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium pl-3">
                    {" "}
                    Xem chi nhánh của Batdongsan.com.vn{" "}
                  </span>
                </summary>

                <ul className="grid grid-cols-1 md:grid-cols-3 mt-2 mx-auto space-y-1 gap-4">
                  <li>

                    <div>
                      <div >Chi nhánh TP.Hồ Chí Minh</div>
                      <div className="font-[12px]">
                        Tầng 3, Tháp B tòa nhà Viettel Complex, 285 Cách Mạng
                        Tháng Tám, Phường 12, Quận 10, TP. Hồ Chí Minh
                        <br />
                        Điện thoại: 0904 893 279 - 0904 946 163
                      </div>
                    </div>
                    <div>
                      Chi nhánh Đà Nẵng
                      <div>
                        Tầng 9, tòa nhà Vĩnh Trung Plaza, số 255 – 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, TP. Đà Nẵng
                        <br />
                        Điện thoại: (0236) 3 666 968 - Mobile: 0904 907 279
                      </div>
                    </div>

                    <div>
                      Chi nhánh Nha Trang
                      <div>
                        Tầng 6, Tòa nhà CTCP Điện Lực Khánh Hòa, 11 Lý Thánh Tôn, Phường Vạn Thạnh, TP Nha Trang, Khánh Hòa
                        <br />
                        Điện thoại: (0258) 3 818 886 - Mobile: 0902 169 295
                      </div>
                    </div>

                  </li>

                  <li>

                    <div>
                      Chi nhánh Hải Phòng
                      <div>
                        Phòng 502, TD Business Center, lô 20A Lê Hồng Phong, quận Ngô Quyền, TP. Hải Phòng
                        <br />
                        Điện thoại: (0225) 3 246 848 - Mobile: 0903 456 322
                      </div>
                    </div>

                    <div>
                      Chi nhánh Cần Thơ
                      <div>
                        Lầu 8, số 8 đường Phan Văn Trị, phường An Phú, quận Ninh Kiều, TP. Cần Thơ
                        <br />
                        Điện thoại: (0292) 3 837 838 - Mobile: 0902 229 697
                      </div>
                    </div>

                    <div>
                      Chi nhánh Vũng Tàu
                      <div>
                        Tầng 4, tòa nhà ACB, số 12 Hoàng Hoa Thám, phường 2, TP. Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu
                        <br />
                        Điện thoại: (0254) 3 511 339 - Mobile: 0904 509 293
                      </div>
                    </div>

                  </li>

                  <li>

                    <div>
                      Chi nhánh Bình Dương
                      <div>
                        Phòng 10, tầng 16, Becamex Tower, số 230 Đại lộ Bình Dương, P.Phú Hòa, TP.Thủ Dầu Một, tỉnh Bình Dương
                        <br />
                        Điện thoại: (0274) 22 21 201, Mobile: 0919 255 580
                      </div>
                    </div>

                    <div>
                      Chi nhánh Đồng Nai
                      <div>
                        Lầu 18, tòa Pegasus, số 53-55 đường Võ Thị Sáu, phường Quyết Thắng, TP. Biên Hoà, tỉnh Đồng Nai
                        <br />
                        Điện thoại: 0906 282 428
                      </div>
                    </div>

                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <hr className="h-px my-5  bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="grid md:grid-cols-[40%,30%,30%] text-sm">
          <div>
            <span>
              Copyright © 2007 - 2023 Batdongsan.com.vn
              <br />
              <br />
              Giấy ĐKKD số 0104630479 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
              02/06/2010 Giấy phép thiết lập trang thông tin điện tử tổng hợp
              trên mạng số 191/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 31/08/2023
            </span>
          </div>
          <div className="md:mt-9 md:pl-[32px] ">

            Chịu trách nhiệm nội dung GP ICP: Bà Đặng Thị Hường
            <br />
            Chịu trách nhiệm sàn GDTMĐT: Ông Bạch Dương
            <br />
            Quy chế, quy định giao dịch có hiệu lực từ 08/08/2023
            <br />
            Ghi rõ nguồn "Batdongsan.com.vn" khi phát hành lại thông tin từ
            website này.
          </div>
          <div className="flex justify-between mt-10 ">
            <div className="">
              <a href="">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/newhome/da-dang-ki-bct.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="">
              <div className="flex gap-2 mr-10 mt-1">
                <a href="">
                  <i>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
                  </i>
                </a>
                <a href="">
                  <i>
                    <img width="38" height="38" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-youtube-offers-videos-and-music-and-original-content-logo-color-tal-revivo.png"
                      alt="external-youtube-offers-videos-and-music-and-original-content-logo-color-tal-revivo"
                      className="pt-1" />
                  </i>
                </a>
                <a href="">
                  <i className="bg-black">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/zalo.png" alt="zalo" />

                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
