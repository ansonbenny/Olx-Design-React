import React from 'react'
import './SellBtnMob.css'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'

function SellBtnMob() {
    return (
        <div className='mobSellBtnFixed'>
            <div className='text-center'>
                <div className="sellMenu">
                    <SellButton></SellButton>
                    <div className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellBtnMob
