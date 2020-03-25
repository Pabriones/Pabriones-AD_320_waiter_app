import {addClass, addId, div, i, nav, span} from '../builder';

export default function navbar (){
    const navLeft = addClass(div(), 'navbar-left')

    const cartIcon = addId(addClass(i(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    const cartItem = addClass(span(), 'cart-items');
    const navbarItem = addClass(div(cartIcon, cartItem),'navbar-item');
    const navRight = addClass(div(navbarItem),'navbar- right', 'cart');

    return addClass(nav(navLeft, navRight), 'navbar');
}