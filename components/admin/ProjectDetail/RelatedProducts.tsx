
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../ui/card";
const RelatedProducts=()=>{
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };
    return(
      <div className="my-8">
      <h3 className="font-semibold text-lg mb-4">Dự án liên quan</h3>
      <Slider {...settings}>
        <Card className="border-none">
          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Card>
        <div className="border border-solid rounded-lg">
          <a href="">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <div>
              <div className="mt-2 mb-3 ml-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#999] bg-gray-100 border rounded px-2"
                  >
                    Đang cập nhật
                  </label>
                </div>
                <div className="font-semibold mt-1">DIC Wisteria City</div>
                <div>
                  <div>
                    <div>
                      <span className="font-semibold my-1">332 ha</span>
                      <span>.</span>
                    </div>
                    <div>Nhơn Trạch, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="border border-solid rounded-lg">
          <a href="">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <div>
              <div className="mt-2 mb-3 ml-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#999] bg-gray-100 border rounded px-2"
                  >
                    Đang cập nhật
                  </label>
                </div>
                <div className="font-semibold mt-1">DIC Wisteria City</div>
                <div>
                  <div>
                    <div>
                      <span className="font-semibold my-1">332 ha</span>
                      <span>.</span>
                    </div>
                    <div>Nhơn Trạch, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="border border-solid rounded-lg">
          <a href="">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <div>
              <div className="mt-2 mb-3 ml-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#999] bg-gray-100 border rounded px-2"
                  >
                    Đang cập nhật
                  </label>
                </div>
                <div className="font-semibold mt-1">DIC Wisteria City</div>
                <div>
                  <div>
                    <div>
                      <span className="font-semibold my-1">332 ha</span>
                      <span>.</span>
                    </div>
                    <div>Nhơn Trạch, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="border border-solid rounded-lg">
          <a href="">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <div>
              <div className="mt-2 mb-3 ml-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#999] bg-gray-100 border rounded px-2"
                  >
                    Đang cập nhật
                  </label>
                </div>
                <div className="font-semibold mt-1">DIC Wisteria City</div>
                <div>
                  <div>
                    <div>
                      <span className="font-semibold my-1">332 ha</span>
                      <span>.</span>
                    </div>
                    <div>Nhơn Trạch, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="border border-solid rounded-lg">
          <a href="">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <div>
              <div className="mt-2 mb-3 ml-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#999] bg-gray-100 border rounded px-2"
                  >
                    Đang cập nhật
                  </label>
                </div>
                <div className="font-semibold mt-1">DIC Wisteria City</div>
                <div>
                  <div>
                    <div>
                      <span className="font-semibold my-1">332 ha</span>
                      <span>.</span>
                    </div>
                    <div>Nhơn Trạch, Đồng Nai</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Slider>
    </div>
    )
}
export default RelatedProducts
