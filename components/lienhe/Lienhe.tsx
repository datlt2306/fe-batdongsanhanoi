"use client"
import React from 'react'
import Thongtin2 from './Thongtin2'
import Thongtin3 from './Thongtin3'
import Thongtin4 from './Thongtin4'
import Thongtin5 from './Thongtin5'
import Thongtin1 from './Thongtin1'

const Lienhe = () => {
    return (
        <div>
            <div>
                <div className='hidden lg:block'>
                    <Thongtin1 />
                    <Thongtin2 />
                    <Thongtin3 />
                    <Thongtin4 />
                    <Thongtin5 />
                </div>

            </div>
        </div>
    )
}

export default Lienhe
