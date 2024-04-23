import brand1 from '../assets/img/brand-1.png'
import brand2 from '../assets/img/brand-2.png'
import brand3 from '../assets/img/brand-3.png'
import brand4 from '../assets/img/brand-4.png'
import brand5 from '../assets/img/brand-5.png'
import brand6 from '../assets/img/brand-6.png'



function Brand() {
    return (
        <div className="brand">
        <div className="container-fluid">
          <div className="brand-slider">
            <div className="brand-item">
              <img src={brand1} alt="" />
            </div>
            <div className="brand-item">
              <img src={brand2} alt="" />
            </div>
            <div className="brand-item">
              <img src={brand3} alt="" />
            </div>
            <div className="brand-item">
              <img src={brand4} alt="" />
            </div>
            <div className="brand-item">
              <img src={brand5} alt="" />
            </div>
            <div className="brand-item">
              <img src={brand6} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Brand;