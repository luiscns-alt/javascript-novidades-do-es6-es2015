export default class Calc {
    static sum(a, b) {
        return a + b;
    }
}


export class Calc{
    static sum(a, b){
        return a + b;
    }
}

export default Calc;

export { Calc as default };

import Something from './Calc';

import {default as Something} from './Calc';

import Calc from './Calc';

import Something, { myVar } from './Calc';