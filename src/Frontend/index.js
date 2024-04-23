import React from "react";
import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";

import Header from "./partial/header";
import Slider from "./partial/slider";
import Brand from "./partial/brand";
import Feature from "./partial/feature";
import Category from "./partial/category";
import Product from "./partial/product";
import Footer from "./partial/footer";

function Index() {
  return (
    <div>
      {/* Header Start  */}
      <Header />
      {/* Header End */}

      <div className="row content">
        <Outlet/>
      </div>


      {/* Main Slider Start */}
      {/* <Slider /> */}
      {/* Main Slider End */}

      {/* Brand Start */}
      {/* <Brand /> */}
      {/* Brand End */}

      {/* Feature Start*/}
      {/* <Feature /> */}
      {/* Feature End*/}

      {/* Category Start*/}
      {/* <Category /> */}
      {/* Category End*/}

      {/* Product Start  */}

      {/* Product End  */}
      {/* <Product /> */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default Index;
