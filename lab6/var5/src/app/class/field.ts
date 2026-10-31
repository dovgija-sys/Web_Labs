export class Field{
    constructor(
        public name: string,
        public r:number,
        public k:number,
    ){}
    getYield():number{
        return this.k*this.r;
    }
    
}