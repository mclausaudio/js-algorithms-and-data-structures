const array1 = [4, 5620, -2, 57.55, 698, 1, 3];

const swap = (arr, index1, index2) => {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

function bubble(array) {
	// This first loops sets the number of comparisons we need to make
	// Bubble sort pushes largest number of each iteration to the end of the
	// The array's largest number will be at the end after the first iteration
	// So we set i = array.length and work out way to zero, so the number of comparisons being made goes down by 1 after each iteration
	// if we start from 0 and work our way up, we keep comparing the last numbers in teh array over and over
	for (let i = array.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
			}
		}
	}
	return array;
}

let array2 = [1, 2, 3, 5, 4, 6, 7, 8, 10, 9];
//optimized for a situation where an array is NEARLY sorted already.
//if an array is already sorted after a few iterations, no need ot keep going.
function optimized(array) {
	let noSwaps;
	for (let i = array.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return array;
}
console.log(bubble(array1));
console.log(optimized(array2));
