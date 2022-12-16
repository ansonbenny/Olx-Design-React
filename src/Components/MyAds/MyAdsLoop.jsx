import React from 'react'
import MyAdsCard from './MyAdsCard'

function MyAdsLoop({AdsList,loop}) {
  return (
    <div>
      {
        loop.map((obj, key) => {
            if (AdsList === 'all') {
              return (
                <MyAdsCard key={key} position={key} />
              )
            } else {
              if (obj.list === AdsList) {
                return (
                  <MyAdsCard key={key} position={key} />
                )
              }
            }
          })
      }
    </div>
  )
}

export default MyAdsLoop
