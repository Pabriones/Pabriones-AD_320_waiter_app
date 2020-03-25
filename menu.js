import {addClass, div, addId, section} from '../builder';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(items = [] ){
    const leftSide = leftMenu(items);
    const rightSide = rightMenu(items);
    const columns = addClass(section(leftSide, rightSide), 'columns');
    const menuEle = addId(addClass(div(columns), 'container'), 'menu');

    return menuEle;
}