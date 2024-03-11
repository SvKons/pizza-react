import { CartItem } from '../redux/cart/types';

export const calTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
