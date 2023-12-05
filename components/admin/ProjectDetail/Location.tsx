const Location = ({ data }: any) => {
  const listLocation = data?.description_group?.location;
  console.log(listLocation);

  return (
    <div className="flex  flex-col justify-between mt-5 text-sm">
      <ul className="">
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer justify-center   rounded-lg outline-none text-red-500 hover:bg-rgba(0,0,0,0) hover:text-red-400">
              <span className="text-sm font-medium pr-1"> Xem thêm </span>
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
            </summary>

            <ul className=" mt-2 mx-auto space-y-1 marker:text-sky-400">
              <p>
                {listLocation?.location_description}
              </p>

              <figure className="text-center text-[#999] ">
                <img
                  src={`${listLocation?.location_image[0]?.image_url}`}
                  alt=""
                />
                <figcaption className="mt-3 mb-3">
                  <i>
                    {listLocation?.location_image_description}
                  </i>
                </figcaption>
              </figure>


              <p className="font-medium">
                Giao thông đường bộ từ khu đô thị Đông Sài Gòn:
              </p>

              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black"
              >
                <li>
                  6km đến Cao tốc TP.HCM – Long Thành – Dầu Giây ở phía
                  Bắc
                </li>
                <li>
                  12km đến Cao tốc Biên Hòa – Bà Rịa Vũng Tàu ở phía Đông
                </li>
                <li>
                  4km đến Cao tốc Bến Lức – TP.HCM – Nhơn Trạch ở phía Nam
                </li>
                <li>
                  Đường cầu Quận 9 rộng 120m TP.HCM – Nhơn Trạch, ranh
                  phía Tây của KĐT Đông Sài Gòn
                </li>
                <li>
                  Đường 25B rộng 80m nối đường cầu Quận 9 đi quốc lộ 51
                  ngang qua trung tâm dự án
                </li>
                <li>
                  Đường 25C rộng 100m nối đường cầu Quận 9 đi sân bay quốc
                  tế Long Thành, giáp phía Nam dự án
                </li>
                <li>
                  Tuyến tàu điện trên không đường 25B từ TP.HCM đi sân bay
                  Long Thành
                </li>
              </ul>

              <p className="font-medium">Giao thông đường sông:</p>

              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black"
              >
                <li>9km đến Cảng Cát Lái – sông Đồng Nai ở phía Tây</li>
                <li>
                  16km đến Cảng Phước An – sông Thị Vải ở phía Đông Nam
                </li>
              </ul>

              <p className="font-medium">Giao thông đường hàng không:</p>

              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black"
              >
                <li>15km đến sân bay quốc tế Long Thành ở phía Đông</li>
              </ul>

              <h3 className="font-semibold">Tiện ích</h3>
              <p className="">
                Một số tiện ích được quy hoạch tại dự án khu dân cư Phú
                Thịnh 1:
              </p>

              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black"
              >
                <li>
                  Trường tiểu học được bố trí ở góc Đông Nam của Phú Thịnh
                  1
                </li>
                <li>
                  Khu thể dục thể thaogồm 1 sân bóng đá, 2 sân tennis và 2
                  sân bóng rổ được bố trí ở khoảng giữa trường tiểu học
                  với khu phố có kinh doanh
                </li>
                <li>
                  Khu công viên kênh nước cảnh quan được bố trí ở phía Bắc
                  của Phú Thịnh 1, với hai lối tiếp cận phía Đông và phía
                  Tây
                </li>
              </ul>

              <h3 className="font-semibold">Mặt bằng - Thiết kế</h3>
              <p className="">
                Với quy mô 20ha, dự án khu dân cư Phú Thịnh 1 gồm các sản
                phẩm sau:
              </p>

              <ul
                role="list"
                className="marker:text-black list-disc pl-5 space-y-3 text-black"
              >
                <li>
                  58 lô nhà phố liền kề diện tích 175m2 (7m x 25m). Các
                  căn góc có diện tích: 194m2 – 196m2 – 200m2.
                </li>
                <li>
                  76 lô biệt thự đơn lập 300m2 (15m x 20m). Các căn góc có
                  diện tích: 320m2 – 336m2 – 340m2 – 355m2 – 360m2.
                </li>
                <li>
                  9 lô dinh thự mặt công viên 600m2 (30m x 20m). Căn góc
                  diện tích: 660m2 (33m x 20m).
                </li>
                <img
                  src="https://file4.batdongsan.com.vn/2023/10/24/20231024170239-8b97_wm.jpg"
                  alt=""
                />
              </ul>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}
export default Location