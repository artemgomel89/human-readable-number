module.exports = function toReadable (number) {
    let stringNumber = number.toString();

    let units = {
    0 : "zero",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
    }
    
    let teen = {
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    }
    
    let dozens = {
    10 : "ten",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety",
    }
    
    switch (stringNumber.length) {
    
      case 3 : if (stringNumber[1] == 0 && stringNumber[2] == 0) {
      return `${units[stringNumber[0]]} hundred`;
    } else 
    
     if (stringNumber[1] == 0 && stringNumber[2] !== '0') {
      return `${units[stringNumber[0]]} hundred ${units[stringNumber[2]]}`;
    } else
    
    if (stringNumber[1] == 1 && stringNumber[2] !== '0') {
      return `${units[stringNumber[0]]} hundred ${teen[stringNumber[1] + stringNumber[2]]}`;
    } else
    
    if (stringNumber[1] !== '1' && stringNumber[2] !== '0') {
       return `${units[stringNumber[0]]} hundred ${dozens[stringNumber[1] + '0']} ${units[stringNumber[2]]}`
    } else
    
      return `${units[stringNumber[0]]} hundred ${dozens[stringNumber[1] + '0']}`;
    
    
    case 2: if (stringNumber[1] == 0 || stringNumber[0] == 1) {
      return dozens[number] || teen[number];
    } else
      return `${dozens[stringNumber[0] + '0']} ${units[stringNumber[1]]}`;
    
    case 1: return units[number];
    
    };
  
}
