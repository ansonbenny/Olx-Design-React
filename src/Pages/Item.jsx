import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ItemComponent from '../Components/Item/ItemComponent'
import ItemBottum from '../Components/Item/ItemBottum'

function Item() {
  return (
    <div>
      <Header IsHideSeMob={true}/>
      <ItemBottum/>
      <ItemComponent />
      <Footer />
    </div>
  )
}

export default Item