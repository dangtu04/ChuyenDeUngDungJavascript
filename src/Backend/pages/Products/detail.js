// function ProductDetail() {
//     return (
//         <div>
//             <h1>Detail</h1>
//         </div>
//     );
// }
// export default ProductDetail;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const { slug } = useParams();
  const [ProductDetail, setProductDetail] = useState([]);
  const [amountItem, setAmountItem] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    apiProduct.getDetailProductBySlug(slug).then((res) => {
      try {
        const productAttributes = res.data[0].attributes;
        const product = {
          id: res.data[0].id,
          name: productAttributes.product_name,
          price: productAttributes.price,
          slug: productAttributes.slug,
          image: productAttributes.image.data.attributes.url,
          description: productAttributes.description,
        };

        setProductDetail(product);
        console.log("product: ", product);
      } catch (err) {
        console.log("Error: ", err.message);
      }
    });
  }, []);

  return (
    <div>
        <h1>Product Detail</h1>
    <table>
      <tr>
        <td><strong>Name:</strong></td>
        <td>{ProductDetail.name}</td>
      </tr>
      <tr>
        <td><strong>Image:</strong></td>
        <td><img src={`${imageURL}${ProductDetail.image}`} alt={ProductDetail.name} style={{maxWidth: "200px"}} /></td>
      </tr>
      <tr>
        <td><strong>Slug:</strong></td>
        <td>{ProductDetail.slug}</td>
      </tr>
      <tr>
        <td><strong>Price:</strong></td>
        <td>{ProductDetail.price}</td>
      </tr>
      <tr>
        <td><strong>Description:</strong></td>
        <td>{ProductDetail.description}</td>
      </tr>
    </table>
  </div>
  );
}

export default ProductDetail;
