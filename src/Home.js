import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt=""/>
      <div className="home__row">
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {11.96}
        rating = {4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {21.96}
        rating = {5}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {31.96}
        rating = {3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>
      <div className="home__row">
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {11.96}
        rating = {4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {21.96}
        rating = {5}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {31.96}
        rating = {3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {31.96}
        rating = {3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>
      <div className="home__row">
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {11.96}
        rating = {4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product 
        id="121314"
        title="The Lean Startup: How content Innovation"
        price = {21.96}
        rating = {5}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
