import { randomInt } from './randomInt';

export class ArrayOne {
	values: number[];
    values_multiple_2: number[];

	constructor() {
		this.values = [];
        this.values_multiple_2 = [];
	}

    genArray(n: number): void {
        const randInt = new randomInt();
        this.values = [];
        this.values_multiple_2 = [];
        for (let i = 0; i < n; i++) {
            this.values.push(randInt.randomInteger(1, 10));
            this.values_multiple_2[i] = this.values[i] * 2;
        }
    }

}
