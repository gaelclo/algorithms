function chess(n){
  resolve(0, n, []);
}

function resolve(row, n, current) {
  if(row==n) {
   console.log(current);
  }
  else {
    for(let i=0;i<n;i++) {
      current.push(i);
      if(valid(row, current)) {
        resolve(row+1, n, current);
      }
      current.pop();
    }
  }
}

function valid(row, cols) {
  let last = cols[cols.length-1];
  for(let i=0;i<cols.length-1;i++) {
    if(cols[i]==last || Math.abs(last-cols[i])==row-i) { 
       return false;
    }
  }
  return true;
}

chess(4);
