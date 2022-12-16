import React from 'react'
import Arrow from '../../assets/Arrow'

function CategoryDesk() {
    return (
        <div>
            <div className='shadowCate'></div>
            <div className='deskcategorys'>
                <div className='categoryFlex'>
                    <div className='maincategory'>
                        <h4>ALL CATEGORIES </h4>
                        <span className='ArrowCate'> <Arrow /> </span>
                    </div>
                    <div className='liteCategiorys'>
                        <h5>Cars</h5>
                        <h5>Motorcycles</h5>
                        <h5>Mobile Phones</h5>
                        <h5>For Sale:Houses & Apartments</h5>
                        <h5>OLX Reniew (Mobile)</h5>
                        <h5>Cars</h5>
                        <h5>Motorcycles</h5>
                        <h5>Mobile Phones</h5>
                        <h5>For Sale:Houses & Apartments</h5>
                        <h5>OLX Reniew (Mobile)</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryDesk
