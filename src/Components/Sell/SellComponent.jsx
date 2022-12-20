import React from 'react'
import './SellComponent.css'

function SellComponent() {
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
                            <h6 style={{paddingTop: '25px', paddingBottom: '10px' }}>
                                <span style={{ color: '#002F34A3',fontWeight: 'normal'}}>Mobiles / Mobile Phones &nbsp;</span>
                                <span className='ChangeBtn'>Change</span>
                            </h6>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                            <h3 className='MainCOLOR'>INCLUDE SOME DETAILS</h3>
                            <label>Brand *</label>
                            <br />
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">Apple</option>
                            </select>
                            <br />

                            <label>Ad title *</label>
                            <br />
                            <input type="text" name="" id="" />
                            <br />

                            <label>Description *</label>
                            <br />
                            <input type="text" name="" id="" />
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                        </div>

                        <div style={{ padding: '25px', borderBottom: '1px solid rgba(14,4,5,.2)' }}>
                        </div>

                        <div style={{ padding: '25px' }}>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default SellComponent