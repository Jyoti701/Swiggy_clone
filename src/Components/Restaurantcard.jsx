import React from 'react'

const Restaurantcard = ({resdata}) => {
  return (
    <div className='restaurant_card'>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.info.cloudinaryImageId}`} alt="{resdata.info.name}"className='res_img'/>
    <div className='res-info'>
  <h5>{resdata.info.name}</h5>
  <div className='res-info-avgrating'>
  <h5>Rating:{resdata.info.avgRating}</h5>
  <h5>{resdata.info.costForTwo}</h5>
  </div>
  <h5>{resdata.info.name}</h5>
  </div>
    </div>
  )
}

export default Restaurantcard
