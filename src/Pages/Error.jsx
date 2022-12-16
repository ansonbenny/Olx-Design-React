import React from 'react'
import ErrorComp from '../Components/Error/Error'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/BannerSet'
import Footer from '../Components/Footer/Footer'

function Error() {
  var CateOption1 = {
    mobile: false,
    desktop : true,
    banner : false,
  }

  var CateOption2 = {
    mobile: true,
    desktop : false,
    banner : false,
  }
  return (
    <div>
      <Header/>
      <Banner {...CateOption1} />
      <ErrorComp/>
      <Banner {...CateOption2} />
      <Footer/>
    </div>
  )
}

export default Error
