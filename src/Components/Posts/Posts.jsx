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

    var Items = [
        {
            name : 'Yamaha R15 V3',
            img : '/Images/Product/R15V3.jpg',
            price : 110000,
            location: 'Kanwar Singh Nagar, Delhi, Delhi'
        },
        {
            name : 'Yamaha / R15 V-1 , 2016 model',
            img : '/Images/Product/r15v1.webp',
            price : 73000,
            location: 'Rajouri Garden, Delhi, Delhi'
        },
        {
            name : 'TVS Ntorq 2018 model',
            img : '/Images/Product/tvs.webp',
            price : 45000,
            location: 'Inderpuri, Delhi, Delhi'
        },
        {
            name : 'Yamaha Ray zr street rally 125 cc',
            img : '/Images/Product/zr.webp',
            price : 62500,
            location: 'Sector 102, Noida, Uttar Pradesh'
        },
        {
            name : 'YAMAHA CYGNUS RAY ZR cc-125, (2022 ) Model',
            img : '/Images/Product/zr2.webp',
            price : 95000,
            location: 'Patparganj, Delhi, Delhi'
        }
    ]
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
                                    Items.map((obj, key) => {
                                        return (
                                            <div className='cardpadSe' key={key}>
                                                <div className='cardSe'>
                                                    <div className='floatRight'>
                                                        <Heart />
                                                    </div>
                                                    <div className='cardImgDiv'>
                                                        <img src={obj.img} alt="" />
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h3 className='cardAmt'>₹ {obj.price}</h3>
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h5 className='cardSubTextH4'>{obj.name}</h5>
                                                    </div>
                                                    <div className='pad-5'>
                                                        <h5 className='cardSubText'>{obj.location}</h5>
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
                                Items.map((obj, key) => {
                                    return (
                                        <div className='card' key={key}>
                                            <div className='floatRight'>
                                                <Heart />
                                            </div>
                                            <div className='cardImgDiv'>
                                                <img src={obj.img} alt="" />
                                            </div>
                                            <div className='pad-5'>
                                                <h3 className='cardAmt'>₹ {obj.price}</h3>
                                                <h5 className='cardSubTextH4'>{obj.name}</h5>
                                                <h5 className='cardSubText'>{obj.location}</h5>
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
