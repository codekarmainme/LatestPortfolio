import React from 'react'
import { mobileapps } from '../../data/Mobileappdata'
import poppin from '../../Assets/font/Poppins/Poppins-Black.ttf';
import '../../style/Mobilecard.css'
function Mobileappscard() {
  return (
    <div>
        {
            mobileapps.map((app)=>(
            <>
                <h4 style={{color:'white',padding:'20px',fontFamily:poppin}}>{app.name}</h4>
                {
                  <div className='mobile-cont' >
                   {app.images.map((image)=>(
                    <img src={image} alt="" style={{height:'500px',width:'300px',borderRadius:'20px'}} />
                    ))}
                  </div>   
                }
            </>
            ))
        }
    </div>
  )
}

export default Mobileappscard;