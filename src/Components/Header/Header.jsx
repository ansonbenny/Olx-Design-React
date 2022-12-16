import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import OlxLogo from '../../assets/OlxLogo'
import SearchIcon from '../../assets/Search'
import SearchIconLoc from '../../assets/LocSEicon'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import Arrow from '../../assets/Arrow'
import './Header.css'
import Login from '../Login/Login'
import ContentControl from '../../ContentControl'
import MobMenu from '../MobMenu/MobMenu'
import MobHeadSpeci from './MobHeadSpeci'
import MobHead from './MobHead'

function Header({SpecificMob}) {
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('')
  const { clkdLogin, setClkdLogin, mobMenuAct, setmobMenuAct } = useContext(ContentControl)

  return (
    <div>
      {clkdLogin && <Login />}
      {mobMenuAct && <MobMenu />}
      <div className='Header'>
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
              <div className='searchInDiv'>
                <input className='searchInput' placeholder='Find Cars, Mobile Phones and more...' type='text' value={search} onChange={(e) => {
                  setSearch(e.target.value)
                }} />
              </div>
              <div className='searchIcon'>
                <button onClick={() => console.log('clicked')} className='searchIconBtn'><SearchIcon color={'#FFFFFF'} /></button>
              </div>
            </div>

            <div className='accDivHeader'>
              <div className='headLangu'>
                <h4 className='langFlex'>ENGLISH <span className='langArrow'> <Arrow /> </span></h4>
              </div>
              <div className='headLangu'>
                <h4 className='headLogin' onClick={() => {
                  setClkdLogin(true)
                  setmobMenuAct(false)
                }}>LOGIN</h4>
              </div>
              <div className='headerSell'>
                <div className="sellMenu">
                  <SellButton></SellButton>
                  <div className="sellMenuContent">
                    <SellButtonPlus></SellButtonPlus>
                    <span>SELL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='headerBgWhite'></div>

        {SpecificMob ? <MobHeadSpeci/> : <MobHead/>}

      </div>
      <div className="topPaddMob"></div>
      <div className="topPaddDesk"></div>


    </div>
  )
}

export default Header
