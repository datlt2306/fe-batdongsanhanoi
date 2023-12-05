"use client"
import React from 'react'
import RealEstate from './RealEstate'
import RealEstateByLocation from './RealEstateByLocation'
import RealEstateNews from './RealEstateNews'
import Introduce from './Introduce'
import OutstandingRealEstate from './OutstandingRealEstate'
import Search from './Search'
import News from './News'
import { DialogDemo } from '../modal/ModalSearch'
import Homeslides from '../admin/projects/slided'

const HomePage = React.memo(() => {
    return (
        <div className='relative'>

            <Homeslides />
            <div className='absolute z-10 bottom-10 left-0 top-[-130px] right-0 sm:top-[-140px] md:top-[-140px] lg:top-0 xl:top-1'>
                <Search />
            </div>
            <div className='md:mx-10'>

                <RealEstate />
                <OutstandingRealEstate />
                <RealEstateByLocation />
                <RealEstateNews />
                <Introduce />
            </div>
        </div>

    )
});

export default HomePage