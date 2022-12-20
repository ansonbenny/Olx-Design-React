import React from 'react'
import { useContext } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SellComponent from '../Components/Sell/SellComponent'
import ContentControl from '../ContentControl'

function Sell() {
    const { setpageName } = useContext(ContentControl)
    return (
        <div onLoad={()=>{
            setpageName('Post your Ad')
        }}>
            <Header SpecificDesk={true} SpecificMob={true} sellPage={true} />
            <SellComponent/>
            <Footer copyOnly={true} />
        </div>
    )
}

export default Sell