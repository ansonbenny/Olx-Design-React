import React from 'react'
import './SellComponent.css'

function SellComponent() {

    var imgLoop = [1, 2, 3, 4, 5, 6]
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
                                    <label>Brand *</label>
                                    <br />
                                    <select className='BrandInput' name="" id="">
                                        <option value=""></option>
                                        <option value="">Apple</option>
                                    </select>
                                </div>

                                <div className='InputDivs'>
                                    <label>Ad title *</label>
                                    <br />
                                    <input type="text" className='inputSell' name="" id="" />

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
                                    <label>Description *</label>
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
                                                <div key={key} className='imgSltCard'>
                                                    <h1 style={{ color: '#002f34' }}><i className="fa-solid fa-camera"></i></h1>
                                                    <h5 style={{ color: '#002f34', fontWeight: 'normal' }}>Add Photo</h5>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className='imgSltCard' style={{ borderColor: '#9dadb6', paddingTop: '30px', height: '70px' }}>
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

                                <label>State *</label>
                                <br />
                                <select className='BrandInput' name="" id="">
                                    <option value=""></option>
                                    <option value="">Apple</option>
                                </select>
                            </div>

                            <p style={{ fontSize: 'small', color: 'red' }}>This field is mandatory</p>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>REVIEW YOUR DETAILS</h3>
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