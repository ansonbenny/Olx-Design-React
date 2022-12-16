import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function MenuSubCard({ MenuSub, setMenuSub }) {
    const modalRef = useRef()

    useEffect(() => {
        if (MenuSub.btn === true) {
            setMenuSub({ ...MenuSub, btn: false })
        } else {
            window.addEventListener('click', closePopUpBody);
            function closePopUpBody(event) {
                if (!modalRef.current?.contains(event.target)) {
                    setMenuSub({ ...MenuSub, key: null, btn: false })
                }
            }
            return () => window.removeEventListener('click', closePopUpBody)
        }
    })

    return (
        <div ref={modalRef} >
            <div className='MenuSubCardDesk'>
                <div>
                    <ul className='MenuItems'>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Edit</Link>
                        </li>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Deactivate</Link>
                        </li>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Remove</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='MenuSubCardMob'>
                <div>
                    <ul className='MenuItems'>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Edit</Link>
                        </li>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Deactivate</Link>
                        </li>
                        <li>
                            <Link className='aTagUnderLineRm MainCOLOR fontSmall-14' to={'/'} >Remove</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuSubCard
