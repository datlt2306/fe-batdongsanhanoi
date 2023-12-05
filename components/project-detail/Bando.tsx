import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



const Bando = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl'>Xem trên bản đồ</h1>
                <div className='mt-5 mb-5'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9685642768873!2d105.76398327428967!3d21.03394378760239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf0f1742f%3A0xe820ab53e8c05841!2zS8O9IFTDumMgWMOhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1697103669593!5m2!1svi!2s"
                        width={"100%"}
                        height={250}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Tìm kiếm theo từ khóa</h1>
                <div>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Vinhomes Ocean Park Gia Lâm từ 30 m2 đến 50 m2</a>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Dương Xá Gia Lâm</a>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ An Đào Gia Lâm</a>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Gia Lâm Hà Nội</a>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Hà Nội 1PN</a>
                    <a href="#" className=' mt-2 overflow-hidden block float-left bg-[#F2F2F2] text-[#2C2C2C] cursor-pointer mr-2 px-4 py-1.5 rounded-[40px]'>Căn hộ Hà Nội từ 1 tỉ đến 2 tỉ</a>
                    <a href="#"></a>
                </div>
            </div>
            <div className=''>
                <Table className=' mt-9 border-t-[rgb(240,240,240)] border-t border-solid  border-b-[rgb(240,240,240)] border-b-[10px] '>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Ngày đăng</TableHead>
                            <TableHead>Ngày hết hạn</TableHead>
                            <TableHead>Loại tin</TableHead>
                            <TableHead className="">Mã tin</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">11/10/2023</TableCell>
                            <TableCell className="font-medium">26/11/2023</TableCell>
                            <TableCell className="font-medium">Tin VIP Kim Cương</TableCell>
                            <TableCell className="font-medium">23458112</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Bando
