import React, { useContext } from 'react'
import './MobMenu.css'
import OlxLogo from '../../assets/OlxLogo'
import ContentControl from '../../ContentControl'
import { Link } from 'react-router-dom'

function MobMenu() {
    const { setmobMenuAct, setClkdLogin } = useContext(ContentControl)
    const login = true
    return (
        <div className='MobileMenu'>
            <div className='logoAndX'>
                <div className='flex'>
                    <div>
                        <h2 onClick={() => setmobMenuAct(false)} className='mobMenuX'><i className="fa-solid fa-x"></i></h2>
                    </div>
                    <div>
                        <OlxLogo color={'#002f34'} />
                    </div>
                </div>

            </div>

            <div className='MobMenuRows'>
                <div className="flex">
                    {login ? (
                        <>
                            <div className='roundBorder'
                                style={{ background: '#A020F0', width: '96px', height: '96px' }}
                            >
                                <h2 style={{ color: 'white', textAlign: 'center', fontSize: '40px', paddingTop: '25px' }}>A</h2>
                            </div>
                            <div className='accDetails'>
                                <h5>Hello,</h5>
                                <h4>Anson Benny</h4>
                                <Link className='viewEdit'>View and edit profile</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <img style={{ width: '96px', height: '96px' }} src="/Images/avatar.png" alt="" />
                            </div>
                            <div className='accDetails'>
                                <h4>Welcome to OLX!</h4>
                                <h5>Take charge of your buying and selling journey.</h5>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className='MobMenuRows'>
                <Link className='aTagUnderLineRm' to={'/post/attributes'}>
                    <div className="flex" style={{paddingBottom: '5px'}}>
                        <div>
                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                                <path className="rui-4K4Y7" d="M670.72 128l42.667 128h182.613l42.667 42.667v554.667l-42.667 42.667h-768l-42.667-42.667v-554.667l42.667-42.667h182.613l42.667-128h317.44zM609.28 213.333h-194.56l-42.667 128h-201.387v469.333h682.667v-469.333h-201.387l-42.667-128zM512 341.333c117.632 0 213.333 95.701 213.333 213.333s-95.701 213.333-213.333 213.333-213.333-95.701-213.333-213.333 95.701-213.333 213.333-213.333zM512 426.667c-70.613 0-128 57.387-128 128s57.387 128 128 128 128-57.387 128-128-57.387-128-128-128z">
                                </path>
                            </svg>
                        </div>
                        <p className='MOBmenuLinks'>
                            <span>&nbsp;&nbsp;Start Selling</span>
                        </p>
                    </div>
                </Link>

                <Link className='aTagUnderLineRm' to={'/myads'}>
                    <div className="flex" style={{paddingBottom: '5px'}}>
                        <div>
                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                                <path className="rui-4K4Y7" d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"></path>
                            </svg>
                        </div>
                        <p className='MOBmenuLinks'>
                            <span>&nbsp;&nbsp;My ADS</span>
                        </p>
                    </div>
                </Link>
                <div className="flex" style={{paddingBottom: login ? '5px' : '0px'}}>
                    <div>
                        <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                            <path className="rui-4K4Y7" d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z">
                            </path>
                        </svg>
                    </div>
                    <p className='MOBmenuLinks'>
                        <span>&nbsp;&nbsp;Chat</span>
                    </p>
                </div>
                {
                    login && (
                        <div className="flex">
                            <div>
                                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                                    <path className="rui-4K4Y7" d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z">
                                    </path></svg>
                            </div>
                            <p className='MOBmenuLinks2nd'>
                                <span>&nbsp;&nbsp;Notifications</span>
                            </p>
                        </div>
                    )
                }
            </div>

            <div className={login ? 'MobMenuRows' : 'MobMenuRowLast'}>
                <div className="flex" style={{paddingBottom: '5px'}}>
                    <div>
                        <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                            <path className="rui-4K4Y7" d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"></path>
                        </svg>
                    </div>
                    <p className='MOBmenuLinks2nd'>
                        <span>&nbsp;&nbsp;Help</span>
                    </p>
                </div>

                <div className="flex">
                    <div>
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                            <path className="rui-4K4Y7" d="M679.214 818.309l-77.189-77.189 78.312-104.494 131.801 52.751c-32 53.915-77.809 98.715-132.927 128.93zM434.425 852.091v-184.941l-38.789-38.789h-212.364c-12.955-36.461-20.364-75.52-20.364-116.364 0-14.235 1.125-28.237 2.792-42.047l53.294 35.53 38.827 2.405 124.51-62.254 58.609 87.854 49.649 13.189 232.728-116.364 16.29-53.915-110.080-192.737c134.75 48.408 231.564 177.106 231.564 328.339 0 37.197-5.973 72.999-16.795 106.667l-162.715-65.125-45.459 12.761-116.364 155.151 3.608 50.695 77.15 77.15c-28.315 7.409-57.871 11.791-88.513 11.791-26.687 0-52.557-3.297-77.575-8.999zM221.945 705.939h134.905v118.303c-54.535-27.23-101.159-67.995-134.905-118.303zM512 162.91c5.663 0 11.17 0.582 16.795 0.853l123.112 215.506-165.43 82.734-58.57-87.893-49.649-13.189-134.982 67.49-57.871-38.555c49.649-132.306 177.106-226.949 326.593-226.949zM512 85.333c-235.249 0-426.667 191.379-426.667 426.667 0 235.249 191.418 426.667 426.667 426.667 235.288 0 426.667-191.418 426.667-426.667 0-235.288-191.379-426.667-426.667-426.667z"></path>
                        </svg>
                    </div>

                    <p className='MOBmenuLinks2nd'>
                        <span>&nbsp;&nbsp;Select Language</span>
                    </p>
                </div>

                {
                    login === false && (
                        <button onClick={() => {
                            setmobMenuAct(false)
                            setClkdLogin(true)
                        }} className='MobMenuLoginBtn'>Login</button>
                    )
                }
            </div>

            {
                login && (
                    <div className='MobMenuRows'>
                        <div className="flex">
                            <div>
                                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                                    <path className="rui-4K4Y7" d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"></path></svg>
                            </div>
                            <p className='MOBmenuLinks2nd'>
                                <span>&nbsp;&nbsp;Settings</span>
                            </p>
                        </div>
                    </div>
                )
            }

            {
                login && (
                    <div className='MobMenuRowLast'>
                        <div className="flex">
                            <div>
                                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" fill='#002f34'>
                                    <path className="rui-4K4Y7" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path>
                                </svg>
                            </div>
                            <p className='MOBmenuLinks'>
                                <span>&nbsp;&nbsp;Logout</span>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MobMenu
