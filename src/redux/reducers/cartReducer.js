import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const initCart = {
  carts: [],
  amountItem: 0,
  totalAmount: 0,
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.carts.findIndex(
        item => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // Sản phẩm đã tồn tại trong giỏ hàng

        const updatedCart = state.carts.map((item, index) => 
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.amount }
            : item
      );
        toast.info(`Increase the number of <${action.payload.name}>`, {
          position: 'bottom-right',
          autoClose: 2000
        })

        return {
          ...state,
          carts: updatedCart,
          amountItem: state.amountItem
        }
      } else {
        // sản phẩm chưa có trong giỏ hàng
        toast.success(`Add <${action.payload.name}> to cart`, {
          position: 'bottom-right',
          autoClose: 2000
        })
        return {
          ...state,
          carts: [...state.carts, {...action.payload, quantity: action.payload.amount}],
          amountItem: state.amountItem + 1,
        };
      }

      case 'TOTAL_CART':
        let total = 0;
        state.carts.map(item => {
          total += item.price * item.quantity;
        });
        const newState = {
          ...state,
          totalAmount: total
        }
        return newState;

      case 'REMOVE_ITEM_CART':
        toast.warning(`Remove <${action.payload.name}> from cart`, {
          position: 'bottom-right',
          autoClose: 2000
        })
        return {
          ...state,
          carts: state.carts.filter(item => item.id !== action.payload.id)
        }

      case 'CLEAR_CART':
        toast.warning(`Remove all products from cart`, {
          position: 'bottom-right',
          autoClose: 2000
        })
        return {
          ...state,
          carts: []
        }



    default:
      return state;
  }
};

export default cartReducer;
