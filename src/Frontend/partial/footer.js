import paymentMethod from '../assets/img/payment-method.png'
import godaddy from '../assets/img/godaddy.svg'
import norton from '../assets/img/norton.svg'
import ssl from '../assets/img/ssl.svg'


function Footer() {
    return (
        <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-map-marker"></i>123 E Store, Los
                    Angeles, USA
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>email@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone"></i>+123-456-7890
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Follow Us</h2>
                <div className="contact-info">
                  <div className="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Company Info</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Purchase Info</h2>
                <ul>
                  <li>
                    <a href="#">Pyament Policy</a>
                  </li>
                  <li>
                    <a href="#">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row payment align-items-center">
            <div className="col-md-6">
              <div className="payment-method">
                <h2>We Accept:</h2>
                <img src={paymentMethod} alt="Payment Method" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-security">
                <h2>Secured By:</h2>
                <img src={godaddy} alt="Payment Security" />
                <img src={norton} alt="Payment Security" />
                <img src={ssl} alt="Payment Security" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer;