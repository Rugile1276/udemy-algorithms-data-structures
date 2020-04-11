function countUniqueValues(list){
  let i = 0;
  let j = 1;
  if (list.length == 0) return 0;
  while(list[j] !== undefined){
      if (list[i] == list[j]){
        j++;
      }else{
        i++;
        list[i] = list[j];
        j++;
      }
  }
  return i+1;
}
