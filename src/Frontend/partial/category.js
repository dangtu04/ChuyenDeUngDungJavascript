import caegory3 from '../assets/img/category-3.jpg'
import caegory4 from '../assets/img/category-4.jpg'
import caegory5 from '../assets/img/category-5.jpg'
import caegory6 from '../assets/img/category-6.jpg'
import caegory7 from '../assets/img/category-7.jpg'
import caegory8 from '../assets/img/category-8.jpg'

function Category() {
    return (
        <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src={caegory7} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-250">
                <img src={caegory8} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-150">
                <img src={caegory3} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-150">
                <img src={caegory4} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-250">
                <img src={caegory5} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src={caegory6} />
                <a className="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Category;