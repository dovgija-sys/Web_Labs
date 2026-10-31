import {Field} from './field';
export class PotatoField extends Field{
    constructor(
        name: string,
        r:number,
        k:number,
        public S:number
    ){
        super(name,r,k);
    }
    override getYield():number{
        return super.getYield()*this.S;
    }
}