import React from 'react'
import Banner from './Banner'
import './BannerSet.css'
import CategoryDesk from './CategoryDesk'
import CategoryMob from './CategoryMob'

function BannerSet({...CateOption}) {
    return (
        <div>
            {CateOption.desktop &&  <CategoryDesk/>}
            {CateOption.banner && <Banner/>}
            {CateOption.mobile && <CategoryMob/>}
        </div>
    )
}

export default BannerSet
