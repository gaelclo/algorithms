function dutch(input, pivot) {
  let placement = 0;
  let pivotValue = input[pivot];
  for(let i=0;i<input.length;i++) {
    if(input[i]<pivotValue) {
      let tmp = input[placement];
      input[placement] = input[i];
      input[i] = tmp;
      placement++;
    }
  }
  
  placement = input.length-1;
  for(let i=input.length-1;i>0 && input[i]>=pivot;i--) {
    if(input[i]>pivotValue) {
       let tmp = input[placement];
       input[placement] = input[i];
       input[i] = tmp;
       placement--;
    }
  }
  console.log(input);
}

let input = [0,1,2,0,2,1,1];
let pivot = 1;

dutch(input, pivot);