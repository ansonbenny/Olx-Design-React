import React,{useContext} from 'react'
import './Login.css'
import ContentControl from '../../ContentControl'

function Login() {
    const {setClkdLogin} = useContext(ContentControl)
    return (
        <div>
            <div className='LoginMainDiv'>
                <div className='LoginGrid'>
                    <div>&nbsp; </div>

                    <div className='gridItemMain'>
                        <div className='rowslogin'>
                            <div>
                                <h2 className='loginX' onClick={()=>setClkdLogin(false)}><i className="fa-solid fa-x"></i></h2>
                                <img style={{maxWidth: '100px',paddingTop: '30px'}} src="/Images/EntryPointPost.webp" alt="" />

                                <h5 className='loginAd'>Help us become one of the safest places to buy and sell</h5>
                            </div>

                            <div>
                                <button className='continueWithLogn'><i className="fa-solid fa-mobile-button"></i> &nbsp;&nbsp;Continue With Phone</button>
                                <button className='continueWithLogn'><i className="fa-brands fa-google"></i> &nbsp;&nbsp;Continue With Google</button>
                            </div>

                            <div>
                                <h4 className='loginOR'>OR</h4>
                                <h4 className='loginWithEml'>Login With Email</h4>
                            </div>

                            <div className='lgnCntntBottum'>
                                <h6 className='fontNormal lgnCntntBottumPadd'>All your personal details are safe with us.</h6>
                                <h6 className='fontNormal'><span className='colorGrey'>If you continue, you are accepting</span> <a className='aTagUnderLineRm' target='_blank' href="gf">OLX Terms and Conditions and Privacy Policy</a></h6>
                            </div>
                        </div>
                    </div>

                    <div> &nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default Login
