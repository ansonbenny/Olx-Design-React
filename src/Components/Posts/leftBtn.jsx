import React from 'react'
import Arrow from '../../assets/Arrow'

function LeftBtn(props) {
    return (
        <div>
            <div className='PostBasedScrlLeft'>
                <button onClick={() => props.data(-300)}> <Arrow /> </button>
            </div>
        </div>
    )
}

export default LeftBtn
