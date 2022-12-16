import React,{useContext} from 'react'
import AppAd from '../Components/AppAd/AppAd'
import Banner from '../Components/Banner/BannerSet'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import ScrollUp from '../Components/ScrollUp/ScrollUp'
import SellBtnMob from '../Components/SellBtnMob/SellBtnMob'
import ContentControl from '../ContentControl'

function Home() {
  const {showScrlUp} = useContext(ContentControl)
  var CateOption = {
    mobile: true,
    desktop : true,
    banner : true,
  }
  return (
    <div>
      <Header/>
      {showScrlUp && <ScrollUp/> }
      <Banner {...CateOption}/>
      <Posts/>
      <AppAd/>
      <Footer homeFooter/>
      <SellBtnMob/>
    </div>
  )
}

export default Home
