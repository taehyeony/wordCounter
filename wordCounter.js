let entireText = document.getElementsByTagName('body')[0].innerText;
let textList = entireText.split(' ');
let countingTextObj = {};

// 등장 횟수 계산
textList.map((text) => {
	lowerText = text.toLowerCase();
	if (countingTextObj[lowerText] === undefined) {
		countingTextObj[lowerText] = 0;
	}
	countingTextObj[lowerText] = countingTextObj[lowerText] + 1;
});

// 정렬
let countedWordArr = new Array();
for (let name in countingTextObj) {
	countedWordArr.push([name, countingTextObj[name]]);
}
countedWordArr.sort((a, b) => {
	return b[1] - a[1];
});

// alert
let str = '';
countedWordArr.map((text) => {
	str = str + (text[0] + ' : ' + text[1]) + '\n';
});

alert(str);
