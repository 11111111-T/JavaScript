

function createArray(length) {
	var array = new Array();
	var num;
	while (array.length < length) {
		num = prompt("请输入数值 ");
		if (isNaN(num)) {
			continue;
		} else {
			num = num * 1;
			array.push(num);
		}
	}
	return array;
}


function arraySort(array) {

	// 使用选择排序
	for (var i = 0; i < array.length - 1; i++) {
		var index = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[index] > array[j]) {
				index = j;
			}
		}
		if (index != i) {
			var temp = array[i];
			array[i] = array[index];
			array[index] = temp;


		}
		return array;
	}
}

			// 	//冒泡排序
			// for (i = 0; i <= arr.length; i++) {
			// 	for (j = 0; j <= arr.length - i - 1; j++)
			// 			//核心算法;
			// 		if (array[j] > array[j + 1]) {
			// 			var temp = array[j]
			// 			array[j] = array[j + 1]
			// 			array[j + 1] = temp;

			// 		}
			// }