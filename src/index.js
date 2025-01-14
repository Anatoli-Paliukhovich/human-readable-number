module.exports = function toReadable(number) {
	let naturalNum;
	let dozens;
	naturalNum = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen'
	}
	dozens = {
		1: 'ten',
		2: 'twenty',
		3: 'thirty',
		4: 'forty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety'
	}
	let strNum = String(number).split('');
	if (number >= 20 && strNum.length === 2) {
		if (number % 10 === 0) {
			return dozens[strNum[0]];
		} else {
			return `${dozens[strNum[0]]} ${naturalNum[strNum[1]]}`
		}
	}
	if (number >= 100 && strNum.length === 3) {
		if (number % 100 === 0) {
			return `${naturalNum[strNum[0]]} hundred`;
		} else if (number % 10 === 0) {
			return `${naturalNum[strNum[0]]} hundred ${dozens[strNum[1]]}`;
		} else if (strNum[1] === '0' && strNum[2] !== '0') {
			return `${naturalNum[strNum[0]]} hundred ${naturalNum[strNum[2]]}`
		} else if (strNum[1] === '1') {
			return `${naturalNum[strNum[0]]} hundred ${naturalNum[strNum.slice(1, 3).join('')]}`
		} else {
			return `${naturalNum[strNum[0]]} hundred ${dozens[strNum[1]]} ${naturalNum[strNum[2]]}`;
		}
	} if (number >= 1000 && strNum.length === 4) {
		if (number % 1000 === 0) {
			return `${naturalNum[strNum[0]]} thousand`;
		} else if (number % 10 === 0) {
			return `${naturalNum[strNum[0]]} thousand ${naturalNum[strNum[1]]} hundred ${dozens[strNum[2]]}`;
		} else {
			return `${naturalNum[strNum[0]]} thousand ${naturalNum[strNum[1]]} hundred ${dozens[strNum[2]]} ${naturalNum[strNum[3]]}`;
		}
	}
	if (number >= 10000 && strNum.length === 5) {
		if (number % 10000 === 0) {
			return `${dozens[strNum[0]]} thousand`;
		} else if (number % 10 === 0) {
			return `${dozens[strNum[0]]} thousand ${naturalNum[strNum[2]]} hundred ${dozens[strNum[3]]}`;
		} else if (strNum[1] === '0') {
			return `${dozens[strNum[0]]} thousand ${naturalNum[strNum[2]]} hundred ${dozens[strNum[3]]} ${naturalNum[strNum[4]]}`;
		} else if (strNum[1] !== '0' && number > 20000) {
			return `${dozens[strNum[0]]} ${naturalNum[strNum[1]]} thousand ${naturalNum[strNum[2]]} hundred ${dozens[strNum[3]]} ${naturalNum[strNum[4]]}`;
		} else {
			return `${naturalNum[strNum.slice(0, 2).join('')]} thousand ${naturalNum[strNum[2]]} hundred ${dozens[strNum[3]]} ${naturalNum[strNum[4]]}`;
		}
	}
	return naturalNum[number];
}