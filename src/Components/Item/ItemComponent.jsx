import React from 'react'
import './ItemComponent.css'

function ItemComponent() {
  return (
    <div>
      <div className='ItemContainer'>
        <div className='ItemImgPriGrid'>

          <div>
            <div className='ItemImgCard'>
              <img src="/Images/Product/iphone.webp" alt="" />
            </div>

            <div className='PriceCardItemMob'>
              <div className='ItemMainCard'>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                  <div>
                    <h1 className='MainCOLOR'>₹ 6,000</h1>
                  </div>
                  <div>
                    <div style={{ float: 'right' }} className="flex">
                      <h3 className='MainCOLOR'><i className="fa-solid fa-share-nodes"></i></h3>
                      <h3 style={{ paddingLeft: '15px' }} className='MainCOLOR'><i className="fa-solid fa-heart"></i></h3>
                    </div>
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                  <p style={{ paddingTop: '5px', color: '#406367', paddingBottom: '12px' }}>iphone 5s 16gb box packed handset with all accesories and box warranty</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', paddingTop: '12px' }}>
                  <div>
                    <p style={{ color: '#406367', fontSize: 'small' }}>Madipur, Delhi, Delhi</p>
                  </div>
                  <div>
                    <p style={{ color: '#406367', fontSize: 'small', textAlign: 'right' }}>Dec,03</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='ItemMainCard itemDesDeta'>
              <div>
                <h3 className='MainCOLOR'>Details</h3>
                <div className='ItemDetails'>
                  <div className="flex">
                    <div>
                      <h5 style={{ color: '#406367' }} className='fontNormal'>Brand</h5>
                    </div>
                    <div>
                      <h5 style={{ paddingLeft: '7em' }} className='fontNormal MainCOLOR'>IPhone</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='MainCOLOR'>Description</h3>
                <div className='ItemDescriptionDiv'>
                  <p className='MainCOLOR'>iphone 5s 16gb box packed handset with all accesories and box warranty cod available ( over delhi ncr)</p>
                </div>
              </div>
            </div>

          </div>

          <div>

            <div className='ItemMainCard PriceCardItemDesk'>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                <div>
                  <h1 className='MainCOLOR'>₹ 6,000</h1>
                </div>
                <div>
                  <div style={{ float: 'right' }} className="flex">
                    <h3 className='MainCOLOR'><i className="fa-solid fa-share-nodes"></i></h3>
                    <h3 style={{ paddingLeft: '15px' }} className='MainCOLOR'><i className="fa-solid fa-heart"></i></h3>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ paddingTop: '5px', color: '#406367', paddingBottom: '25px' }}>iphone 5s 16gb box packed handset with all accesories and box warranty</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                <div>
                  <p style={{ color: '#406367', fontSize: 'small' }}>Madipur, Delhi, Delhi</p>
                </div>
                <div>
                  <p style={{ color: '#406367', textAlign: 'right', fontSize: 'small' }}>Dec,03</p>
                </div>
              </div>
            </div>

            <div className='ItemMainCard'>
              <div>
                <h3 className='fontNormal MainCOLOR'>Seller description</h3>
              </div>
              <div style={{ paddingTop: '10px', display: 'grid', gridTemplateColumns: '80px auto auto' }}>
                <div>
                  <div className='roundBorder' style={{ background: '#A020F0', width: '70px', height: '70px' }}>
                    <h2 style={{ color: 'white', textAlign: 'center', fontSize: '30px', paddingTop: '15px' }}>A</h2>
                  </div>
                </div>

                <div style={{ paddingTop: '15px' }}>
                  <h4 className='MainCOLOR'>Alphagadgets</h4>
                  <p style={{ fontSize: 'small' }} className='fontNormal'>Member since Sep 2022</p>
                </div>

                <div style={{ paddingTop: '20px', float: 'right' }}>
                  <h4 style={{ textAlign: 'right' }} className='MainCOLOR'><i className="fa-solid fa-chevron-right"></i></h4>
                </div>
              </div>

              <div className='ChatWiSelDivDesk'>
                <button>Chat With Seller</button>
              </div>

              <div className='sellerPhone' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                  <h3 style={{ textAlign: 'right' }} className='MainCOLOR'><i className="fa-solid fa-phone"></i></h3>
                  <a style={{ paddingTop: '3px', paddingLeft: '10px' }} className='bold aTagUnderLineRm fontSmall colorLightBlue' href="#">+91746352373</a>
                </div>
              </div>

            </div>

            <div className='ItemMainCard'>
              <div>
                <h3 className='MainCOLOR'>Posted in</h3>
                <p style={{ color: '#406367', fontSize: 'small', paddingTop: '13px', paddingBottom: '12px' }}>Madipur, Delhi, Delhi</p>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5802570732294!2d77.1187777644479!3d28.672284189032816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03974319e107%3A0xf543ccbb3b6bd421!2sMadipur%2C%20Punjabi%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1671873924597!5m2!1sen!2sin" style={{ border: 'none', width: '100%', borderRadius: '3px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div className="ItemMainCard AdIdReportMob">
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', }}>
                <h5 className='MainCOLOR'>AD ID 1704119376</h5>
                <h5 className='MainCOLOR' style={{ textAlign: 'right' }}>REPORT THIS AD</h5>
              </div>
            </div>
            <div className='AdIdReportDesk'>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', paddingTop: '10px' }}>
                <h5 className='MainCOLOR'>AD ID 1704119376</h5>
                <h5 className='MainCOLOR' style={{ textAlign: 'right' }}>REPORT THIS AD</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemComponent