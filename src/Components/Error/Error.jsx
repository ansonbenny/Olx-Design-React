import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
    return (
        <div>
            <div>
                <div className='flexErrorPage'>
                    <div className='ErrorImgDivMob'>
                        <img src="/Images/404.png" alt="error" />
                    </div>
                    <div className='ErrorDetails'>
                        <h1 className='MainCOLOR'>Oops!</h1>
                        <h3>We can't seem to find that.
                            Try searching for it.</h3>
                        <p className='colorGrey'>Error 404</p>
                        <p className='MainCOLOR'>Here are some helpful links:<br/> <Link to='/' className='aTagUnderLineRm MainCOLOR'>Home </Link> <Link className='aTagUnderLineRm MainCOLOR'>Help</Link></p>
                    </div>
                    <div className='ErrorImgDiv'>
                        <img src="/Images/404.png" alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
