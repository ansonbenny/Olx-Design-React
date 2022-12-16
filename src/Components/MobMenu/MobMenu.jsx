import React, { useContext } from 'react'
import './MobMenu.css'
import OlxLogo from '../../assets/OlxLogo'
import ContentControl from '../../ContentControl'

function MobMenu() {
    const { setmobMenuAct, setClkdLogin } = useContext(ContentControl)
    return (
        <div className='MobileMenu'>
            <div className='logoAndX'>
                <div className='flex'>
                    <div>
                        <h2 onClick={() => setmobMenuAct(false)} className='mobMenuX'><i className="fa-solid fa-x"></i></h2>
                    </div>
                    <div>
                        <OlxLogo color={'#002f34'} />
                    </div>
                </div>

            </div>

            <div className='MobMenuRows'>
                <div className="flex">
                    <div>
                        <img style={{ width: '96px', height: '96px' }} src="/Images/avatar.png" alt="" />
                    </div>
                    <div className='accDetails'>
                        <h4>Welcome to OLX!</h4>
                        <h5>Take charge of your buying and selling journey.</h5>
                    </div>
                </div>
            </div>

            <div className='MobMenuRows'>
                <p className='MOBmenuLinks'><i className="fa-solid fa-camera fa-lg"></i> <span>&nbsp;&nbsp;Start Selling</span></p>

                <p className='MOBmenuLinks'><i className="fa-solid fa-copy fa-lg"></i> <span>&nbsp;&nbsp;My ADS</span></p>

                <p className='MOBmenuLinks'><i className="fa-solid fa-comment fa-lg"></i> <span>&nbsp;&nbsp;Chat</span></p>
            </div>

            <div className='MobMenuRowLast'>
                <p className='MOBmenuLinks'><i className="fa-solid fa-circle-question fa-lg"></i> <span>&nbsp;&nbsp;Help</span></p>

                <p className='MOBmenuLinks'><i className="fa-solid fa-earth-asia fa-lg"></i> <span>&nbsp;&nbsp;Select Language</span></p>

                <button onClick={() => {
                    setmobMenuAct(false)
                    setClkdLogin(true)
                }} className='MobMenuLoginBtn'>Login</button>
            </div>
        </div>
    )
}

export default MobMenu
