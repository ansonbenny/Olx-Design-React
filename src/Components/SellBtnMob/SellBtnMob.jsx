import React from 'react'
import './SellBtnMob.css'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import { Link } from 'react-router-dom'

function SellBtnMob() {
    return (
        <div className='mobSellBtnFixed'>
            <div className='text-center'>
                <div className="sellMenu">
                    <Link to={'/post/attributes'}>
                        <SellButton></SellButton>
                        <div className="sellMenuContent">
                            <SellButtonPlus></SellButtonPlus>
                            <span>SELL</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SellBtnMob
