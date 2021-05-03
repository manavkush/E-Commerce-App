import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12334"
            title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics/Shadow Black), 15-dk0268tx"
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
            rating={4}
            price={66990}
          />
          <Product
            id="12332"
            title="Apple Mac Mini (3.6GHz Quad-core 8th-Generation Intel Core i3 Processor, 8GB RAM, 256GB)"
            price={64990}
            image="https://images-na.ssl-images-amazon.com/images/I/712B4P3yOnL._SL1500_.jpg"
            rating={4}
          />
          {/* product */}
        </div>

        <div className="home__row">
          <Product
            id="123"
            title="Tokyo Ghoul - Vol. 1: Volume 1"
            image="https://m.media-amazon.com/images/I/81gv-D-LqhL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            price={599}
          />
          <Product
            id="124"
            title="Tokyo Ghoul, Vol. 13 (Volume 13)"
            image="https://m.media-amazon.com/images/I/71JeTTZFY9L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            price={499}
          />
          <Product
            id="334"
            title="Tokyo Ghoul: re, Vol. 8 (Volume 8)"
            image="https://images-na.ssl-images-amazon.com/images/I/41Ag0luZpDL._SX347_BO1,204,203,200_.jpg"
            rating={5}
            price={462}
          />
        </div>

        <div className="home__row">
          <Product
            id="14"
            title="Lenovo IdeaCentre G5 Gaming Desktop (10th Gen Intel Core i5/8GB/1TB HDD + 256GB SSD/Windows 10/NVIDIA GTX 1660 Super 6GB Graphics), Raven Black (90N9003MIN)"
            image="https://images-na.ssl-images-amazon.com/images/I/51%2BwMKOcDOL._SL1500_.jpg"
            price={68990}
            rating={5}
          />
          <Product
            id="12"
            title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Silver (Latest Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
            price={117900}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
