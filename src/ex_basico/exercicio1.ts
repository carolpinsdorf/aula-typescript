let valores: number[] = [1, 2, 3];
let somaValores: number = valores.reduce(
    (acc,val)=> acc+val,0);
console.log("Soma dos valores: ", somaValores);