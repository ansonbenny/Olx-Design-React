import React from 'react'
import './ItemComponent.css'

function ItemBottum() {
  return (
    <div>
      <div className="ItemMobBottmBtns">
        <div className='ItemBottmDiv'>
          <div>
            <button className='BottmBtns'>Chat</button>
          </div>
          <div className='BottmBtnRt'>
            <button className='BottmBtns'><i className="fa-solid fa-phone fa-lg"></i> &nbsp;Call</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemBottum