import React, { useRef, useState } from 'react'
import Arrow from '../../assets/Arrow'
import Heart from '../../assets/Heart'
import LeftBtn from './leftBtn'
import './Posts.css'

function Posts() {
    const [showLeft, setLeft] = useState(false)
    const ref = useRef(null);
    function handleClick(scrl) {
        ref.current.scrollLeft += scrl
        if (ref.current.scrollLeft == 0) {
            setLeft(false)
        } else {
            setLeft(true)
        }
    }

    var loop = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className='postsHome'>
                <div className='containerPostBasedSearch'>
                    <div className='PostBasedSearchBorder'>
                        <h2>More on Motorcyles <span> <a className='viewMoreSeBased'>View More</a></span></h2>
                        <div className='scrlBtns'>
                            {showLeft ? <LeftBtn data={handleClick} /> : ''}
                            <div className='PostBasedScrlRight'>
                                <button onClick={() => handleClick(300)}> <Arrow /> </button>
                            </div>
                        </div>
                        <div ref={ref} className='PostBasedSearcFlex'>
                            <div>

                                {
                                    loop.map((obj, key) => {
                                        return (
                                            <div className='cardpadSe' key={key}>
                                                <div className='cardSe'>
                                                    <div className='floatRight'>
                                                        <Heart />
                                                    </div>
                                                    <div className='cardImgDiv'>
                                                        <img src="/Images/R15V3.jpg" alt="" />
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h3 className='cardAmt'>₹ 21,000</h3>
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h5 className='cardSubTextH4'>aaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h5 className='cardSubText'>aaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div className='containerPostRecome'>
                    <div>
                        <h2 className='recoTitle'>Fresh recommendations</h2>
                    </div>

                    <div>
                        <div className='PostBasedRec'>

                            {
                                loop.map((obj, key) => {
                                    return (
                                        <div className='card' key={key}>
                                            <div className='floatRight'>
                                                <Heart />
                                            </div>
                                            <div className='cardImgDiv'>
                                                <img src="/Images/R15V3.jpg" alt="" />
                                            </div>
                                            <div className='pad-5'>
                                                <h3 className='cardAmt'>₹ 21,000</h3>
                                                <h5 className='cardSubTextH4'>aaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                                                <h5 className='cardSubText'>aaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className='loadBtnDiv'>
                <button>Load More</button>
            </div>

        </div>
    )
}

export default Posts
