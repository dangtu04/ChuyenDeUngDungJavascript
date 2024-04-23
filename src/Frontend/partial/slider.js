import slider1 from '../assets/img/slider-1.jpg'
import slider2 from '../assets/img/slider-2.jpg'
import slider3 from '../assets/img/slider-3.jpg'
import category1 from '../assets/img/category-1.jpg'
import category2 from '../assets/img/category-2.jpg'

function Slider() {
    return (
        <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-home"></i>Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-shopping-bag"></i>Best Selling
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-plus-square"></i>New Arrivals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-female"></i>Fashion & Beauty
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-child"></i>Kids & Babies Clothes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-tshirt"></i>Men & Women Clothes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-mobile-alt"></i>Gadgets & Accessories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-microchip"></i>Electronics &
                      Accessories
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6">
              <div className="header-slider normal-slider">
                <div className="header-slider-item">
                  <img src={slider1} alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="">
                      <i className="fa fa-shopping-cart"></i>Shop Now
                    </a>
                  </div>
                </div>
                {/* <div className="header-slider-item">
                  <img src={slider2} alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="">
                      <i className="fa fa-shopping-cart"></i>Shop Now
                    </a>
                  </div>
                </div>
                <div className="header-slider-item">
                  <img src={slider3} alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="">
                      <i className="fa fa-shopping-cart"></i>Shop Now
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-img">
                <div className="img-item">
                  <img src={category1} />
                  <a className="img-text" href="">
                    <p>Some text goes here that describes the image</p>
                  </a>
                </div>
                <div className="img-item">
                  <img src={category2} />
                  <a className="img-text" href="">
                    <p>Some text goes here that describes the image</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Slider;