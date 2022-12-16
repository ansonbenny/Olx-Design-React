import React from 'react'

function CategoryMob() {
    return (
        <div className='MobileCategoryBanner'>
            <div className='flex'>
                <div className='MblCateBnrHeadLft'>
                    <h5>Browse Categories</h5>
                </div>
                <div className='MblCateBnrHeadRgt'>
                    <a className='seeAllMobCate'>See All</a>
                </div>
            </div>

            <div>
                <div className="CategoryCardFlexMob">
                    <div className='CategoryCardMob'>
                        <div className='CateCardMobImgDiv'>
                            <img src="/Images/Categories/auto.png" alt="" />
                        </div>
                        <h5>Olx Autos</h5>
                    </div>
                    <div className='CategoryCardMob'>
                        <div className='CateCardMobImgDiv'>
                            <img src="/Images/Categories/bike.png" alt="" />
                        </div>
                        <h5>Bikes</h5>
                    </div>
                    <div className='CategoryCardMob'>
                        <div className='CateCardMobImgDiv'>
                            <img src="/Images/Categories/mobile.png" alt="" />
                        </div>
                        <h5>Mobiles</h5>
                    </div>
                    <div className='CategoryCardMob'>
                        <div className='CateCardMobImgDiv'>
                            <img src="/Images/Categories/home.png" alt="" />
                        </div>
                        <h5>Properties</h5>
                    </div>
                    <div className='CategoryCardMob'>
                        <div className='CateCardMobImgDiv'>
                            <img src="/Images/Categories/computer.png" alt="" />
                        </div>
                        <h5>Electronics & Appliances</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryMob
