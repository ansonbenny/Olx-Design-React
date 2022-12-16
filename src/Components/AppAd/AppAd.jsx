import React from 'react'
import './AppAd.css'

function AppAd() {
    return (
        <div className='AppAd'>
            <div className="phoneImg">
                <img src="/Images/phone-app.webp" alt="" />
            </div>
            <div>
                <h2 className='tryOLX'>TRY THE OLX APP</h2>
                <h4 className='tryOLXabt'>Buy, sell and find just about anything using the app on your mobile.</h4>
            </div>
            <div>
                <div className='flex'>
                    <div className='vrLine'>
                    </div>
                    <div>
                        <h5 className='appLinkTit'>GET YOUR APP TODAY</h5>
                        <div className="flex">
                        <div><img className='appImgAppAd' src="/Images/appstore_2x.webp" alt="" /></div>
                        <div><img className='appImgAppAd' src="/Images/playstore_2x.webp" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppAd
