import React, { useState } from 'react'
import MenuSubCard from './MenuSubCard'

function MyAdsCard({ position }) {
    const [MenuSub, setMenuSub] = useState({})
    return (
        <div>
            <div className='AdsCardDesk'>
                <div className='Gridtwo'>
                    <div className='AddDateDiv'>
                        <h5 className='MainCOLOR'><span className='fontNormal'>FROM :</span> <span>DEC 1,22</span></h5>
                        <h5 className='MainCOLOR'><span className='fontNormal'>TO :</span> <span>ANY TIME</span></h5>
                    </div>

                    <div>
                        <div className='gridThree'>

                            <div className='flex'>
                                <div className='ProImageAds'>
                                    <img src="/Images/Product/preview.jpg" alt="" />
                                </div>
                                <div className='flex'>
                                    <div>
                                        <h5 className='adsTitLenMy'>I will be develop and design your website</h5>
                                    </div>
                                    <div>
                                        <h5 style={{ paddingTop: '35px', fontWeight: 'normal', color: '#002f34' }}>₹0</h5>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <button className='ActiveBtnCard'>Active</button>
                                    <h5 style={{ paddingTop: '35px', paddingLeft: '10px', fontWeight: 'normal', color: '#002f34' }}>This ad is currenty live</h5>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <h4 onClick={() => {
                                    setMenuSub({ ...MenuSub, key: position, btn: true })
                                }} style={{ color: '#002f34', cursor: 'pointer' }}><i className="fa-solid fa-ellipsis fa-xl"></i></h4>
                            </div>

                        </div>

                        <div className='AdsBtmDesk'>
                            <div className='flex'>
                                <div>
                                    <h5 style={{ color: '#002f34', marginTop: '15px', paddingRight: '10px', borderRight: '1px solid #002f34' }}><i className="fa-solid fa-eye"></i> <span style={{ fontSize: 'smaller' }}>Views: <span style={{ fontWeight: 'normal' }}>42</span></span></h5>
                                </div>

                                <div>
                                    <h5 style={{ color: '#002f34', marginTop: '15px', paddingLeft: '10px' }}><i className="fa-solid fa-heart"></i> <span style={{ fontSize: 'smaller' }}>Likes: <span style={{ fontWeight: 'normal' }}>1</span></span></h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    {position === MenuSub.key ? <MenuSubCard MenuSub={MenuSub} setMenuSub={setMenuSub} /> : null}
                </div>

            </div>

            <div className="AdsCardMob">
                <div className='DateDivTwoMob'>
                    <div className="dateDiv">
                        <h5 className='MainCOLOR'><span className='fontNormal'>FROM :</span> <span>DEC 1,22</span><span className="fontNormal"> - </span><span className='fontNormal'>TO :</span> <span>ANY TIME</span></h5>
                    </div>
                    <div style={{ textAlign: 'right', paddingTop: '5px' }}>
                        <h4 onClick={() => {
                            setMenuSub({ ...MenuSub, key: position, btn: true })
                        }} style={{ color: '#002f34', cursor: 'pointer' }}><i className="fa-solid fa-ellipsis fa-xl"></i></h4>
                    </div>
                    {position === MenuSub.key ? <MenuSubCard MenuSub={MenuSub} setMenuSub={setMenuSub} /> : null}
                </div>

                <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div className='ImageAndTitleMob'>
                        <div className='flex'>
                            <div className='ProImageAds'>
                                <img src="/Images/Product/preview.jpg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h5 className='adsTitLenMy'>I will be develop and design your website Sample Sample Sample Sample Sample</h5>
                                    <h5 style={{ paddingTop: '5px', fontWeight: 'normal', color: '#002f34' }}>₹0</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='gridTwoViewLike'>
                            <div>
                                <h5 style={{ color: '#002f34', marginTop: '15px', paddingRight: '10px', borderRight: '1px solid #002f34' }}><i className="fa-solid fa-eye"></i> <span style={{ fontSize: 'smaller' }}>Views: <span style={{ fontWeight: 'normal' }}>42</span></span></h5>
                            </div>

                            <div>
                                <h5 style={{ color: '#002f34', marginTop: '15px', paddingLeft: '10px' }}><i className="fa-solid fa-heart"></i> <span style={{ fontSize: 'smaller' }}>Likes: <span style={{ fontWeight: 'normal' }}>1</span></span></h5>
                            </div>
                        </div>
                    </div>

                    <div className='CardBotmMob'>
                    <button className='ActiveBtnCard'>Active</button>
                                    <h5 style={{ fontWeight: 'normal', color: '#002f34' }}>This ad is currenty live</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAdsCard
