import React from 'react'
import { useState } from 'react'
import './SellComponent.css'

function SellComponent() {
    const [TitleLen,setTitleLen] = useState(0)
    const [AdTitle,setAdTitle] = useState('')
    var imgLoop = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12]
    return (
        <div>
            <div className='SellItemPage'>
                <div className='titleH4Sell'>
                    <h4 style={{ fontSize: '23px', textAlign: 'center', color: '#002f34' }}>POST YOUR AD</h4>
                </div>

                <div className='sellCard'>
                    <form>
                        <div style={{ padding: '15px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>SELECTED CATEGORY</h3>
                            <h6 style={{ paddingTop: '25px', paddingBottom: '10px' }}>
                                <span style={{ color: '#002F34A3', fontWeight: 'normal' }}>Mobiles / Mobile Phones &nbsp;</span>
                                <span className='ChangeBtn'>Change</span>
                            </h6>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>INCLUDE SOME DETAILS</h3>
                            <div>
                                <div style={{ marginTop: '15px' }} className='InputDivs'>
                                    <label className='MainCOLOR'>Brand *</label>
                                    <br />
                                    <select className='BrandInput' name="" id="">
                                        <option></option>
                                        <option>Apple</option>
                                    </select>
                                </div>

                                <div className='InputDivs'>
                                    <label className='MainCOLOR'>Ad title *</label>
                                    <br />
                                    <input type="text" className='inputSell' onChange={(e)=>{
                                        setAdTitle(e.nativeEvent.data)
                                    }} name="" id="" />

                                    <div className='GridtwoMsg'>
                                        <div>
                                            <p style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)', marginTop: '3px' }}>Mention the key features of your item (e.g. brand, model, age, type)</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)', marginTop: '3px' }}>0/70</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='InputDivs'>
                                    <label className='MainCOLOR'>Description *</label>
                                    <br />
                                    <textarea style={{ height: '100px', paddingTop: '10px', resize: 'none' }} className='inputSell'></textarea>

                                    <div className='GridtwoMsg'>
                                        <div>
                                            <p style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)', marginTop: '3px' }}>Include condition, features and reason for selling</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)', marginTop: '3px' }}>0/4096</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>SET A PRICE</h3>
                            <div style={{ marginTop: '15px' }} className='InputDivs'>
                                <label style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)' }}>Price*</label>
                                <br />
                                <div>
                                    <div>
                                        <input type='number' style={{ paddingLeft: '40px' }} className='inputSell' name="" id="" />
                                    </div>
                                    <div style={{ marginLeft: '10px', marginTop: '-30px', float: 'left', position: 'absolute', borderRight: '1px solid gray' }}>
                                        <p style={{ fontSize: 'small', color: 'rgba(0,47,52,.64)', paddingRight: '15px' }}>₹</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>UPLOAD UP TO 12 PHOTOS</h3>
                            <div className='imgSltGrid'>
                                {
                                    imgLoop.map((obj, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} style={{cursor: 'pointer' }} className='imgSltCard'>
                                                    <h1 style={{ color: '#002f34' }}><i className="fa-solid fa-camera"></i></h1>
                                                    <h5 style={{ color: '#002f34', fontWeight: 'normal' }}>Add Photo</h5>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className='imgSltCard' style={{ borderColor: '#9dadb6', paddingTop: '30px', height: '70px',cursor: 'pointer' }}>
                                                    <h1 style={{ color: '#9dadb6' }}><i className="fa-solid fa-camera"></i></h1>
                                                </div>
                                            )
                                        }

                                    })
                                }
                            </div>
                            <p style={{ fontSize: 'small', color: 'red', marginTop: '20px' }}>This field is mandatory</p>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>CONFIRM YOUR LOCATION</h3>
                            <div style={{ marginTop: '20px' }} className='InputDivs'>

                                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', textAlign: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                                    <div style={{ borderBottom: '5px solid #002f34' }}>
                                        <h4 className='MainCOLOR' style={{ fontSize: '14px' }}>LIST</h4>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #9dadb6' }}>
                                        <h4 className='MainCOLOR' style={{ fontSize: '14px', fontWeight: 'normal' }}>CURRENT LOCATION</h4>
                                    </div>
                                </div>

                                <label className='MainCOLOR'>State *</label>
                                <br />
                                <select className='BrandInput' name="" id="">
                                    <option ></option>
                                    <option >Apple</option>
                                </select>
                            </div>

                            <p style={{ fontSize: 'small', color: 'red' }}>This field is mandatory</p>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>REVIEW YOUR DETAILS</h3>
                            <div style={{ marginTop: '20px' }} className='InputDivs'>
                                <div style={{ display: 'grid', gridTemplateColumns: '110px auto' }}>

                                    <div>
                                        <div className='roundBorder' style={{ background: '#A020F0', width: '100px', height: '100px' }}>
                                            <h2 style={{ color: 'white', textAlign: 'center', fontSize: '50px', paddingTop: '20px' }}>A</h2>
                                        </div>
                                    </div>

                                    <div>
                                        <label className='MainCOLOR'>Name</label>
                                        <br />
                                        <input type="text" value='ANSON BENNY' style={{ width: '100%' }} className='inputSell' name="" id="" />
                                    </div>

                                </div>
                                <h4 style={{ paddingTop: '30px', paddingBottom: '40px' }} className='MainCOLOR fontNormal'>Your phone number <span style={{ float: 'right' }}>+917561854559</span></h4>
                            </div>
                        </div>

                        <div style={{ padding: '25px' }}>
                            <div>
                                <button className='PostBtn' type='submit'>Post now</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default SellComponent