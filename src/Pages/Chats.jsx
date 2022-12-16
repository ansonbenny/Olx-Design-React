import React, { useContext, useEffect } from 'react'
import Banner from '../Components/Banner/BannerSet'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ContentControl from '../ContentControl'

function Chats() {
    const { setpageName } = useContext(ContentControl)
    var CateOption = {
        mobile: false,
        desktop: true,
        banner: false,
    }

    useEffect(() => {
        setpageName('Chats')
    }, [])
    return (
        <div>
            <Header SpecificMob={true} />
            <Banner {...CateOption} />
            <Footer />
        </div>
    )
}

export default Chats
