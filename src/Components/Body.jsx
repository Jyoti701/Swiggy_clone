import React, { useState, useEffect } from 'react';
import '../App.css'
import Restaurantcard from './Restaurantcard'


const Body = () => {
  const [fetchData, setFetchData] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setFetchData(data.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants|| []); 
     console.log(fetchData,"yes")
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
    
  }, []);

  return (
   <div className='rastaurant_main_container'>
   <div className='body_top_section'>
   <button onClick={()=>{
   setFetchData(fetchData.filter((res)=>{
    return(
   res.info.avgRating>4.2
    )
   }))
   
   }}>Top Rated rastaurant</button>
</div> 
   <div className='rastaurant_container'>
{
  fetchData.map((item,index)=>{
    return(
    
      <Restaurantcard resdata={item} key={item.info.id}/>
    
    )
  })
}
   </div>
   </div>
  );
};

export default Body;
