function validAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  let freq1 = findFreq(str1);
  let freq2 = findFreq(str2);

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]){
      return false;
    }
  }
  return true;
}

function findFreq(str){
  let freqObj = {};
  for(let i = 0; i<str.length; i++){
    freqObj[str[i]] ? freqObj[str[i]] += 1 : freqObj[str[i]] = 1;
  }
  return freqObj;
}

validAnagram('adaa', 'daa');
