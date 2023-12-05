"use client";
const SearchPrj = () => {
  return (
    <div className="border p-3 mb-2 w-full hidden lg:block">
      <form
        className=" grid grid-cols-[30%,12%,12%,12%,12%,12%] w-100 gap-4 items-center mx-auto  justify-between">
        <div className="">
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            className="bg-gray-100 border w-full rounded-md text-center "
            id=""
          />
        </div>
        <div>
          <select className=" md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm ">
            <option value="" className="text-amber-800">
              Quận/Huyện
            </option>
            <option value="">Nam Từ Liêm</option>
            <option value="">Bắc Từ Liêm</option>
            <option value="">Hoài Đức</option>
            <option value="">Cầu Giấy</option>
            <option value="">Hà Đông</option>
          </select>
        </div>
        <div>
          <select className=" md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm ">
            <option value="" className="text-amber-800">
              Phường
            </option>
            <option value="">Phương Canh</option>
            <option value="">Phúc Diễn</option>
          </select>
        </div>
        <div>
          <select className=" md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm ">
            <option value="" className="text-amber-800">
              Loại hình
            </option>
            <option value="">Chung cư</option>
            <option value="">Cao ốc</option>
          </select>
        </div>
        <div>
          <select className=" md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm ">
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
          <select className=" md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm ">
            <option value="" className="text-amber-800">
              Trạng thái
            </option>
            <option value="">Đã bàn giao</option>
            <option value="">Đã mở bán</option>
            <option value="">Đang mở bán</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchPrj;
