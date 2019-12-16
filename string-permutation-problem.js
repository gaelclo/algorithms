function permute(input, curr) {
  if(!input) {
    console.log(curr);
  }
  else {
    for(let c of input) {
      let newCurr = curr.concat(c);
      let newInput = input.replace(c,"");
      
      permute(newInput, newCurr);
    }
  }
}

let str = "abcd";

permute(str,"");
