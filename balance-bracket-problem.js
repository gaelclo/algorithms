function isBalance(data) {
  const BRACKET_O = "(";
  const BRACKET_C = ")";
  const BRACKET_CURLY_O = "[";
  const BRACKET_CURLY_C = "]";
  const BRACKET_SQUARE_O = "{";
  const BRACKET_SQUARE_C = "}";
  
  let stack = [];
  
  for(let c of data) {
    if(c==BRACKET_O || c==BRACKET_CURLY_O || c==BRACKET_SQUARE_O) {
       stack.push(c);
    }
    else {
      let last = stack.pop();
      if(!last || (last==BRACKET_O && c!=BRACKET_C) || (last==BRACKET_CURLY_O && c!=BRACKET_CURLY_C) 
         || (last==BRACKET_SQUARE_O && c!=BRACKET_SQUARE_C)) {
        return false;
      }
    }
  }
  return stack.length==0;
}

let data = "[][(((())))[]]()";
console.log("balance", isBalance(data));