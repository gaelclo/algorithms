function lis(data) {
  if(!data) return 0;
  let sub = Array(data.length).fill(1);

  for(let i=1;i<data.length;i++) {
    for(let j=0;j<i;j++) {
      if(data[i]>=data[j]) sub[i] = Math.max(sub[j]+1, sub[i]);
    }
  }
  return Math.max(...sub);
}

let data = [-1,3,4,5,2,2,2,2];

lis(data);