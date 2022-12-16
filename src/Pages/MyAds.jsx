import React,{useContext, useEffect} from 'react'
import Banner from '../Components/Banner/BannerSet'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import MyAdsCom from '../Components/MyAds/MyAds'
import ContentControl from '../ContentControl'

function MyAds() {
  const {setpageName} = useContext(ContentControl)
  var CateOption = {
    mobile: false,
    desktop : true,
    banner : false,
  }

  useEffect(()=>{
    setpageName('My ADS')
  },[])
  return (
    <div>
      <Header SpecificMob={true}/>
      <Banner {...CateOption} />
      <MyAdsCom/>
      <Footer/>
    </div>
  )
}

export default MyAds
