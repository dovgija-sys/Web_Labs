import {randomInt} from './randomInt';

export class ArrayTwo {
    values: number[][] = [];
    multiples_of_5: number[] = [];
    indexesI: number[] = [];
    indexesJ: number[] = [];
    sum: number = 0;

    constructor() {
        this.values = [];
    }

    genArray(n: number, m: number): void {
        const randInt = new randomInt();
        this.values = [];
        this.multiples_of_5 = [];
        this.indexesI = [];
        this.indexesJ = [];
        for (let i = 0; i < n; i++) {
            this.values[i] = [];
            for (let j = 0; j < m; j++) {
                this.values[i][j] = randInt.randomInteger(1, 100);
                if (this.values[i][j] % 5 === 0) {
                    this.multiples_of_5.push(this.values[i][j]);
                    this.indexesI.push(i);
                    this.indexesJ.push(j);
                }
                if(this.values[i][j] < 10){
                    this.sum += this.values[i][j];
                }
            }
        }
    }
}