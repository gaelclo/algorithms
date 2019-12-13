function divide(data) {
  if(data.length<2) {
    return data;
  }
  
  let mid = data.length/2;
  let left = data.slice(0, mid);
  let right = data.slice(mid);
  
  divide(left);
  divide(right);
  
  return sort(data, left, right);
}

function sort(data, left, right) {
  let i=0,j=0,k=0;
  
  while(i<left.length && j<right.length) {
    if(left[i]<right[j]) {
       data[k] = left[i];
       i++;
    }
    else {
       data[k] = right[j];
       j++;
    }
    k++;
  }
  
  while(i<left.length) {
    data[k] = left[i];
    i++;
    k++;
  }
  
  while(j<right.length) {
    data[k] = right[j];
    j++;
    k++;
  }
  return data
}

let data = [54,26,93,1,17,77,31,44,55,-90,20];
divide(data);