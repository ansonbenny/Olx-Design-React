import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import OlxLogo from '../../assets/OlxLogo'
import ContentControl from '../../ContentControl'

function MobHead() {
    const { setmobMenuAct } = useContext(ContentControl)
    return (
        <div className="headerMob">
            <div className="mainHeadMob">
                <div className='flex'>
                    <div className='headerMobMenubar'>
                        <button onClick={() => setmobMenuAct(true)}><i className="fa-solid fa-bars"></i></button>
                    </div>
                    <div>
                        <Link to='/'><OlxLogo color={'#002f34'} /></Link>
                    </div>
                </div>

                <div className='mobLocHeadDiv'>
                    <h5 className='mobLocHead'>Kerala <i className="fa-solid fa-location-dot"></i></h5>
                </div>

                <div>

                </div>
            </div>

            <div className='mobSearchHead'>
                <button> <span><i className="fa-solid fa-magnifying-glass"></i></span>&nbsp;&nbsp;Find Cars, Mobiles and more ...</button>
            </div>
        </div>
    )
}

export default MobHead
