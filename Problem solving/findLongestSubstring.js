function findLongestSubstring(str) {
  let counter = 0;
  let longest = 0;
  let obj = {};

  for (var i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = i;
      counter++;
      if (longest < counter) {
        longest = counter;
      }
    }else {
      i = obj[str[i]];
      obj = {};
      counter=0;
    }
  }
  return longest;
}


findLongestSubstring("thisishowwedoit");
