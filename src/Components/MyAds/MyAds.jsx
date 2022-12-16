import React, { useState } from 'react'
import './MyAds.css'
import SearchIconLoc from '../../assets/LocSEicon'
import MyAdsLoop from './MyAdsLoop'

function MyAds() {
  var loop = [{
    list: "active"
  },
  {
    list: "active"
  },
  {
    list: "active"
  }, {
    list: "active"
  }]

  const [AdsList, setAdsList] = useState('all')

  const [AdsNot, setAdsNot] = useState(loop.length)

  const AtvAdsCount = loop.filter((obj) => {
    return obj.list === 'active'
  }).length

  const InAtvAdsCount = loop.filter((obj) => {
    return obj.list === 'inactive'
  }).length

  return (
    <div className='MyAdsMainDiv'>
      <div className='AdsFavtDiv'>
        <div className="AdsFavtGrid">
          <div>
            <h5>ADS</h5>
          </div>
          <div>
            <h5>FAVOURITES</h5>
          </div>
        </div>
      </div>
      <div className='container'>

        <div className='MyAdsFilterAreaDesk'>
          <div className='flex'>
            <div className='MyAdsSeIcon'>
              <SearchIconLoc color={'#002f34'} />
            </div>
            <div className='MyAdsSeInput'>
              <input type="text" placeholder='Search by Ad Title' />
            </div>
          </div>

          <div className='filtersDeskArea'>
            <h4 className='fontNormal MainCOLOR'>Filter By:</h4>
            <button className={AdsList === 'all' ? 'Active' : ''} onClick={() => {
              setAdsList('all')
              setAdsNot(loop.length)
            }}>View All ({loop.length})</button>
            <button className={AdsList === 'active' ? 'Active' : ''} onClick={() => {
              setAdsList('active')
              setAdsNot(AtvAdsCount)
            }}>Active Ads ({AtvAdsCount})</button>
            <button className={AdsList === 'inactive' ? 'Active' : ''} onClick={() => {
              setAdsList('inactive')
              setAdsNot(InAtvAdsCount)
            }}>Inactive Ads ({InAtvAdsCount})</button>
            <button>Pending Ads (0)</button>
            <button>Moderated Ads (0)</button>
          </div>

        </div>

        <div className='MyAdsFilterAreaMob'>
          <h4 style={{fontSize: '15px'}}>View all ({loop.length}) <span style={{color: '#002f34'}}><i class="fa-solid fa-chevron-down fa-lg"></i></span></h4>
        </div>

        <div className='AdsRow'>
          {AdsNot !== 0 ? <MyAdsLoop AdsList={AdsList} loop={loop} /> : <MyAdsNotFound/> }
        </div>

      </div>
    </div>
  )
}

function MyAdsNotFound(){
  return (
    <div className='text-center'>
      <img style={{maxWidth: '200px',paddingTop: '15px'}} src="/Images/no-publications.webp" alt="" />
      <h4 style={{paddingTop: '15px'}} className='colorGrey'>No ads found</h4>
    </div>
  )
}

export default MyAds
