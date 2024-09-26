import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to our online store, your one-stop destination for a wide variety of products 
                ranging from electronics to fashion. Our user-friendly platform makes it easy to browse, 
                select, and purchase your favorite items. Enjoy secure payment options and fast shipping, 
                all from the comfort of your home. Whether you're shopping for the latest trends or everyday essentials, 
                we've got you covered with a seamless shopping experience designed just for you!
            </p>
            <p>
                E-Commerce website typically displays products or sevices and detailed description, images, prices 
                and any avaialable variations in sizes(eg. sizes,color).. Each Product ususally has its own dedicated
                page with relavant information.
            </p>
        </div>
    </div>
  )
}
