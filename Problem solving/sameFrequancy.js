function sameFrequency(num1, num2){
  let firstNumber = num1.toString();
  let secondNumber = num2.toString();
  let freqObj = {};

  if (firstNumber.length !== secondNumber.length){
    return false;
  };

  for (var i = 0; i < firstNumber.length; i++) {
    if(!freqObj[firstNumber[i]]){
      freqObj[firstNumber[i]] = 1;
    }else{
      freqObj[firstNumber[i]] += 1;
    }
  }

  for (var j = 0; j < secondNumber.length; j++) {
    if (freqObj[secondNumber[j]] > 0) {
      freqObj[secondNumber[j]] -=1;
    } else {
      return false;
    }
  }
    return true;
  }
}

sameFrequency(3354, 321);
