// array is a collection of elements of the same type it can be defined using two syntaxes and can be modified after initialization it is also dynamically sized
const arr: string[] = ['Hello', 'world', 'c'];
const numArr: number[] = [1, 2, 3];

const a: Array<string> = ['Hello', 'world', 'c'];

// tuple is a fixed length array with specific types for each index
const tuple: [string, number, boolean] = ['Hello', 1, true];
const DhakaLatLong: [number, number] = [23.8103, 90.4125];
// DhakaLatLong.push("Dhaka"); // this will not work because tuples are immutable
 DhakaLatLong.push(90.4125); 
const DhakaLatLongReadonly: readonly [number, number] = [23.8103, 90.4125];
// DhakaLatLongReadonly.push(90.4125); // this will not work because tuples are immutable