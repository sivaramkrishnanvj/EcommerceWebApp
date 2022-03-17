import React, { useState } from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
   
  return (
    <div className='Home'>
        <img className='home_image' src='https://th.bing.com/th/id/OIP.9tXn3UR8vEBQPWmenEaaGQHaHZ?pid=ImgDet&rs=1'/>
        <div className='home-row'>
    <Product id="1" title="I phone 12" price="70,000" rating="⭐⭐⭐⭐" img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000"></Product>
    <Product id="2" title="Samsung A52" price="30,000" rating="⭐⭐⭐⭐⭐" img="https://m.media-amazon.com/images/I/61QGxCC-M4L._AC_SL1000_.jpg"></Product>
    </div>
    <div className='home-row'>
    <Product id="3" title="Realme 8 pro" price="20,000" rating="⭐⭐⭐⭐" img="https://static.techspot.com/images/products/2021/smartphones/org/2021-04-08-product.png"></Product>
    <Product id="4" title="Realme X3" price="30,000" rating="⭐⭐⭐⭐⭐" img="https://m.media-amazon.com/images/I/51x-0s3KzoL.jpg"></Product>
    <Product id="5" title="I phone 13" price="90,000" rating="⭐⭐⭐⭐" img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572386470"></Product>
    </div>
    <div className='home-row'>
    <Product id="6" title="One Plus 8T" price="35,000" rating="⭐⭐⭐⭐⭐" img="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-lunar.png"></Product>
    <Product id="7" title="Poco X2" price="20,000" rating="⭐⭐⭐⭐" img="https://www.gizmochina.com/wp-content/uploads/2020/01/pocox2.jpg"></Product>
    </div>
    <div className='home-row'>
    <Product id="8" title="I phone 12 Mini" price="70,000" rating="⭐⭐⭐⭐" img="https://www.reliancedigital.in/medias/Apple-12-Mini-Smartphones-491901549-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjc2MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2hmYS85NDA3Nzc1NDA4MTU4LmpwZ3wyNGJlNjBkNmRmZWJlMmY2N2QzMzU5YzA4NzI5MmM3N2M2NzU1MWM4MjgyYjUwMmQ4NGU3Zjk4MDIzODliNmY1"></Product>
    <Product id="9" title="Asus Laptop i9 11th Gen" price="70,000" rating="⭐⭐⭐⭐⭐" img="https://dlcdnwebimgs.asus.com/gain/2644d62d-2077-4e14-94d5-0fd6d5a97443/"></Product>
    <Product id="10" title="One plus 9R" price="40,000" rating="⭐⭐⭐⭐" img="https://m.media-amazon.com/images/I/61PDbUd1VaL._SX679_.jpg"></Product>
    </div>
    </div>
  )
}

export default Home