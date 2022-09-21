import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          // src="https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Kashmiri Apples"
            price={199}
            rating={5}
            image="https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg"
          />
          <Product
            id="49538094"
            title="Banana Robusta"
            price={49}
            rating={4}
            image="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg"
          />
          <Product
            id="90829332"
            title="Garlic"
            price={99}
            rating={4}
            image="https://www.india.com/wp-content/uploads/2017/05/Garlic.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Onions"
            price={199}
            rating={3}
            image="https://evegro.com/wp-content/uploads/2020/07/Onions.jpg"
          />
          <Product
            id="23445930"
            title="Carrots"
            price={99}
            rating={5}
            image="https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/bunch-carrots.jpg?quality=82&strip=1"
          />
          <Product
            id="3254354345"
            title="Cabbage"
            price={69}
            rating={4}
            image="https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs="
          />
        </div>

        <div className="home__row">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
