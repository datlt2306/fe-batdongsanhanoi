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


const Khoanggia = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl'>Khoảng giá phổ biến</h1>
                <p>Bán căn hộ chung cư tại Vinhomes Ocean Park Gia Lâm</p>
            </div>
            <div className=' border border-solid border-[rgb(216,216,216)] p-4 m-4 rounded-[10px]'>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableCell><h1 className='font-bold'>Các dự án cùng khoảng giá</h1><span>Trong vòng bán kính 5km</span></TableCell>
                            <TableCell colSpan={2}><h1 className='font-bold'>Giá bán phổ biến nhất</h1></TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chung cư Ruby City CT3(5 km)</TableCell>
                            <TableCell>25,6 tr/m²</TableCell>
                            <TableCell className="text-right">31 tin bán</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Khoanggia
