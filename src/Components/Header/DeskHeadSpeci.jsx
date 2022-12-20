import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ContentControl from '../../ContentControl'

function MobHeadSpeci({sellPage}) {
    const { pageName } = useContext(ContentControl)
    return (
        <div>
            <div className='SpecificHeadDesk'>
                <div className='flex'>
                    <div className='backBtn'>
                        <Link className='MainCOLOR' to='/'><i className="fa-solid fa-arrow-left fa-xl"></i></Link>
                    </div>
                    <div>
                        <h3 className= {sellPage ? 'MainCOLOR dskSllHedTtle' : 'MainCOLOR'}>{pageName}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobHeadSpeci
