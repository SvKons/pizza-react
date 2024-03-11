import { CartItem } from '../redux/cart/types';
import { calTotalPrice } from './calTotalPrice';

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calTotalPrice(items);

    return {
        items: items as CartItem[],
        totalPrice,
    };
};
