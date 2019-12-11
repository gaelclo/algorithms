function knapsack(w, v, wt, n) {
  if(n==0 || w==0) {
     return 0;
  }
  if(wt[n-1]>w) {
     return knapsack(w, v, wt, n-1);
  }
  return Math.max(knapsack(w, v, wt, n-1), v[n-1] + knapsack(w-wt[n-1], v, wt, n-1));
}

let w = 50;
let wt = [10, 20, 30];
let v = [60, 100, 120];

knapsack(w, v, wt, 3);

