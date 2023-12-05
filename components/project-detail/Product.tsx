"use client"
import React from 'react'
import SlideProduct from './SlideProduct'
import Mota from './Mota'
import Slide2 from './Slide2'
import Thongtin from './Thongtin'
import Khoanggia from './Khoanggia'
import Bando from './Bando'
import Tindaxem from './Tindaxem'
import Thongtin1 from '../lienhe/Thongtin1'
import NavUser from './NavUser'

const Product = () => {
    return (
        <div>
            <SlideProduct />
            <div className='md:px-5 sm:px-1'>
                <Mota />
                <Thongtin />
                <Khoanggia />
                <Bando />
                <Slide2 />
                <Tindaxem />
                <div className='xl:hidden lg:hidden block'>
                    <NavUser />
                </div>
            </div>
        </div >
    )
}

export default Product
