import React, { useContext } from 'react'
import './Header.css'
import Login from '../Login/Login'
import ContentControl from '../../ContentControl'
import MobMenu from '../MobMenu/MobMenu'
import MobHeadSpeci from './MobHeadSpeci'
import MobHead from './MobHead'
import DeskHead from './DeskHead'
import DeskHeadSpeci from './DeskHeadSpeci'

function Header({SpecificMob,SpecificDesk, sellPage,IsHideSeMob}) {
  
  const { clkdLogin, mobMenuAct } = useContext(ContentControl)

  return (
    <div>
      {clkdLogin && <Login />}
      {mobMenuAct && <MobMenu />}
      <div className='Header'>
        {SpecificDesk ? <DeskHeadSpeci sellPage={sellPage}/> : <DeskHead/>}
        
        {SpecificMob ? <MobHeadSpeci sellPage={sellPage}/> : <MobHead IsHideSeMob={IsHideSeMob}/>}

      </div>
      <div style={IsHideSeMob && {paddingTop: '3.2em'}} className="topPaddMob"></div>
      <div className="topPaddDesk"></div>

    </div>
  )
}

export default Header
