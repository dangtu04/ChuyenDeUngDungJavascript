import { imageURL } from "../../../api/config";
import { useDispatch } from "react-redux";
import { REMOVE } from "../../../redux/action/cartAction";



function CartItem(props) {
    const dispatch = useDispatch();
    const removeItem = (item) => {
        dispatch(REMOVE(item));
    }

    return (
    <tr>
        <td>
            <div className="img">
                <img src={imageURL + props.item.image} alt="Image"/>
                <p>{props.item.name}</p>
            </div>
        </td>
        <td>${props.item.price}</td>
        <td>
            <div className="qty">
                <button className="btn-minus"><i className="fa fa-minus"></i></button>
                <input type="text" value={props.item.quantity}/>
                <button className="btn-plus"><i className="fa fa-plus"></i></button>
            </div>
        </td>
        <td>${props.item.price * props.item.quantity}</td>
        <td><button onClick={() => removeItem(props.item)} ><i className="fa fa-trash"></i></button></td>
    </tr>  
    );
}
export default CartItem;