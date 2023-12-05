import { GoMail } from "react-icons/go";
const Contact =()=>{
    return(
        <div className="">
        <div className="flex flex-col items-center bg-gray-100 p-8  border-1 rounded ">
          <div className="text-black font-semibold text-center">
            Liên hệ tư vẫn miễn phí
          </div>
          <p className="my-3 text-center">
            {" "}
            Hãy để lại thông tin của bạn để nhận tư vấn và các cập nhật mới
            nhất của dự án này
          </p>
          <div className="flex flex-row items-center bg-[#009BA1]  border rounded py-2 px-10">
            <div className="text-white mr-2 md:block hidden ">
              <GoMail />
            </div>
            <button className="text-white">Liên hệ lại với tôi</button>
          </div>
        </div>
      </div>
    )
}
export default Contact