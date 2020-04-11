function areThereDuplicates (...list){
  let listObj = {};

  for (var i = 0; i < list.length; i++) {
    if(listObj[list[i]]){
      return true;
    }else {
      listObj[list[i]] = 1;
    }
  }
  return false;
}

areThereDuplicates(1,2,3);
