function isSubsequence(str1, str2){
  let first = 0;
  let second = 0;

  if (!str1) return true;
  while(second < str2.length ){
    if(str1[first] == str2[second]){
      first++;
      if (first == str1.length) {
        return true;
      }
    }
    second++;
  }
  return false;
}
