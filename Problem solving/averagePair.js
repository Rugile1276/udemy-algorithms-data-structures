function averagePair(list, num){
  let start = 0;
  let end = list.length - 1;
  let avg;
  while (start < end) {
    avg = (list[start] + list[end]) / 2;
    if (avg == num) {
      return true;
    }else if (avg < num ) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

averagePair([1,2,3], 2.5);
