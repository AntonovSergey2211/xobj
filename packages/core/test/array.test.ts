/* eslint-disable no-undef */

import { decode } from '../src/decode';
import { encode } from '../src/encode';

describe('array', () => {
	it('should write empty array', () => {
		const source = [];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(3);

		const target = decode(buffer);
		expect(target.length).toBe(0);
	});

	it('should write simple array', () => {
		const source = [235, -234, 22.533, 'simple string', null, true, false];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(31);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		expect(target[0]).toBe(source[0]);
		expect(target[1]).toBe(source[1]);
		expect(target[2]).toBeCloseTo(source[2] as number, 3);
		expect(target[3]).toBe(source[3]);
		expect(target[4]).toBe(source[4]);
		expect(target[5]).toBe(source[5]);
		expect(target[6]).toBe(source[6]);

		const jsonData = new TextEncoder().encode(JSON.stringify(source));
		expect(jsonData.byteLength).toBeGreaterThan(buffer.byteLength);
	});

	it('should write non filled array', () => {
		const source = [];
		source[0] = 0;
		source[1] = 1;
		source[2] = 2;
		source[100] = 3;

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(108);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		expect(target[0]).toBe(source[0]);
		expect(target[1]).toBe(source[1]);
		expect(target[2]).toBe(source[2]);
		expect(target[100]).toBe(source[100]);
	});

	it('should write positive integer optimized array', () => {
		const source = [1, 2, 256, 4, 5, 335566, 7];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(14);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		expect(target).toEqual(source);
	});

	it('should write negative integer optimized array', () => {
		const source = [1, 2, -256, 4, 5, 335566, -7];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(14);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		expect(target).toEqual(source);
	});

	it('should write float 32 number optimized array', () => {
		const source = [1.234, 2.455, -56.3268, 4.455, 5.33424, 66.224];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(28);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		for (let i = 0; i < source.length; i++) {
			expect(target[i]).toBeCloseTo(source[i], 5);
		}
	});

	it('should write float 64 number optimized array', () => {
		const source = [1.234232323, 2.4553234, -256.3268555, 4.45534234, 5.33424342, 335566.224423];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(52);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		for (let i = 0; i < source.length; i++) {
			expect(target[i]).toBeCloseTo(source[i], 5);
		}
	});

	it('should write number array without optimization', () => {
		const source = [1, 2.4553234, -256, 4, 5.334, 66.224423];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(29);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		for (let i = 0; i < source.length; i++) {
			expect(target[i]).toBeCloseTo(source[i], 5);
		}
	});

	it('should write string optimized array', () => {
		const source = ['one', 'two', 'three', 'four', 'five'];

		const buffer = encode(source);
		expect(buffer.byteLength).toBe(28);

		const target = decode(buffer);
		expect(target.length).toBe(source.length);
		expect(target).toEqual(source);
	});
});
