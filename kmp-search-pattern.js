function getLps(pattern) {
  
  let lps = [pattern.length];
  lps[0] = 0;
  
  let i=1, m=0;
  while(i<pattern.length) {
    if(pattern[i]==pattern[m]) {
      m++;
      lps[i] = m;
      i++;
    }
    else if (pattern[i]!=pattern[m] && m!=0) {
      m = lps[m-1]; // ex: acabacaCd
    }
    else {
      lps[i] = 0;
      i++;
    }
  }
  return lps;
}

function kmpSearch(str, pattern) {
  let lps = getLps(pattern);
  let i=0, j=0;
  while(j<str.length) {
    if(str[j]!=pattern[i]) {
      if(i==0) {
        j++;
      }
      else {
        i = lps[i-1];
      }
    }
    else {
      i++;
      j++;
      
      if(i==pattern.length) {
        console.log('found at ', j-i);
        i = lps[i-1];
      }
    }
  }
}

let str = "aaaaaabaaaaaaaaaaaaaaaaa";
let pattern = "aaab";

let str2 = "acfacabacabacacdk";
let pattern2 = "acabacacd";

kmpSearch(str, pattern);


