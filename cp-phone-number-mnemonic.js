const MAPPING = ["0","1","abc","def","ghi","klm","mno","pqrs","tuv","wxyz"];

function mnem(current, phoneNumber) {
  if(current.length==phoneNumber.length) {
     console.log(current);
  }
  else {
    for(let i=0;i<MAPPING[phoneNumber[current.length]].length;i++) {
      mnem(current+MAPPING[phoneNumber[current.length]].charAt(i), phoneNumber);
    }
  }
}

mnem("","97");