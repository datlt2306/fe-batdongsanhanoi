import { useEffect, useRef } from 'react';
import ReactModal from 'react-modal';

// ReactModal.setAppElement('#__next');

const Formlienhe = ({ isOpen, onClose, message }: any) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Thông báo"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className='p-1 rounded-[10px] sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[90%] mx-auto'>
                <div className='fixed inset-0 flex items-center justify-center bg-[rgb(42,42,42)] bg-opacity-70 z-20 '>
                    <div className='w-[500px] bg-white p-1  rounded-[10px]'>
                        {/* <div className="relative w-full"> */}
                        <div className=" top-4 right-4 w-full h-[50px]">
                            <span className='float-left font-semibold leading-[50px] text-[18px] pl-3'>Yêu cầu liên hệ lại</span>
                            <button className="text-4xl float-right leading-[50px] pr-2 " onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512">
                                    <style dangerouslySetInnerHTML={{ __html: "svg{fill:}" }} />
                                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                </svg>
                            </button>
                        </div>
                        <hr />
                        {/* </div> */}
                        <div>
                            <form action="" className='px-4'>
                                <div>
                                    <a href="#" className=' overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Vinhomes Ocean Park Gia Lâm từ 30 m2 đến 50 m2</a>
                                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Dương Xá Gia Lâm</a>
                                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ An Đào Gia Lâm</a>
                                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Gia Lâm Hà Nội</a>
                                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Hà Nội 1PN</a>
                                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Hà Nội từ 1 tỉ đến 2 tỉ</a>
                                    <a href="#"></a>
                                </div>
                                <div className='w-[100%] float-left mt-3'>
                                    <textarea className='w-full p-2 border border-solid border-[rgb(195,195,195)] rounded-[10px]' name="" id="" cols="30" rows="4" placeholder='Bạn muốn nhắn thêm gì không ?'></textarea>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className=" bg-[100%_100%] min-h-[40px] w-full text-center mx-auto my-2.5 px-[35px] py-[3px] rounded-none font-[bold] bg-[linear-gradient(90deg,#B0772A_-29.08%,#DCB560_-13.94%,#B0772A_50.86%,#F5D77F_106.43%,#B0772A_125.76%)] text-base font-bold text-white hover:bg-[#e6c13d] px-3 py-2 text-white border border-solid border-white hover:border-transparent hover:shadow-lg hover:text-[#d91616]"
                                    >
                                        GỬI NGAY
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};

export default Formlienhe;
