/** Helper for generating random integers in an inclusive range. */
export class randomInt {
	randomInteger(min: number, max: number): number {
		if (min > max) {
			throw new RangeError('min must be less than or equal to max');
		}
        let rand = Math.random() * (max - min + 1) + min;
		return Math.floor(rand);
	}
}
