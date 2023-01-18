import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import OlxLogo from '../../assets/OlxLogo'
import SearchIcon from '../../assets/Search'
import SearchIconLoc from '../../assets/LocSEicon'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import Arrow from '../../assets/Arrow'
import ContentControl from '../../ContentControl'
import LtArrow from '../../assets/LtArrow'
import Notification from '../../assets/Notification'
import Chat from '../../assets/Chat'

function DeskHead() {
    const [location, setLocation] = useState('Delhi')
    const [search, setSearch] = useState('')

    const login = true

    const { setClkdLogin, setmobMenuAct } = useContext(ContentControl)
    return (
        <div>
            <div className="headerDesk">
                <div className='headerGrid'>
                    <div className='headLogo'>
                        <Link to='/'><OlxLogo color={'#002f34'} /></Link>
                    </div>
                    <div className='locationDiv'>
                        <div className='locIcon'>
                            <SearchIconLoc color={'#002f34'} />
                        </div>
                        <div className='locInDiv'>
                            <input className='locaInput' type='text' value={location} onChange={(e) => {
                                setLocation(e.target.value)
                            }} />
                            <div className='locaArrow'>
                                <Arrow />
                            </div>
                        </div>
                    </div>

                    <div className='searchDiv'>
                        <div className={login ? 'searchInDiv2nd' : 'searchInDiv'}>
                            <input className='searchInput' placeholder='Find Cars, Mobile Phones and more...' type='text' value={search} onChange={(e) => {
                                setSearch(e.target.value)
                            }} />
                        </div>
                        <div className='searchIcon'>
                            <button onClick={() => console.log('clicked')} className='searchIconBtn'><SearchIcon color={'#FFFFFF'} /></button>
                        </div>
                    </div>

                    <div className={login ? 'accDivHeaderLoged' : 'accDivHeader'}>
                        <div className='headLangu'>
                            <h4 className='langFlex'>ENGLISH <span className='langArrow'> <Arrow /> </span></h4>
                        </div>
                        {login ? (
                            <>
                                <div className='headLangu2nd'>
                                    <Chat />
                                </div>
                                <div className='headLangu2nd'>
                                    <Notification />
                                </div>
                                <div className='flex'>
                                    <Link to={'/myads'} className="aTagUnderLineRm">
                                        <div className='roundBorder'
                                            style={{ background: '#A020F0', width: '40px', height: '40px', marginLeft: '20px', marginTop: '8px' }}
                                        >
                                            <h2 style={{ color: 'white', textAlign: 'center', fontSize: '20px', paddingTop: '8px' }}>A</h2>
                                        </div>
                                    </Link>
                                    <div style={{ marginLeft: '15px', marginTop: '17px' }}>
                                        <LtArrow />
                                    </div>

                                </div>
                            </>
                        ) : (
                            <div className='headLangu'>
                                <h4 className='headLogin' onClick={() => {
                                    setClkdLogin(true)
                                    setmobMenuAct(false)
                                }}>LOGIN</h4>
                            </div>
                        )}

                        <div className={login ? 'headerSell2nd' : 'headerSell'}>
                            <Link to={'/post/attributes'}>
                                <div className="sellMenu">
                                    <SellButton></SellButton>
                                    <div className="sellMenuContent">
                                        <SellButtonPlus></SellButtonPlus>
                                        <span>SELL</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='headerBgWhite'></div>
        </div>
    )
}

export default DeskHead