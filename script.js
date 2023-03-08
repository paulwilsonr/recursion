function fibs(num) {
    const arr = [0];
    let total = 1;
    for(i=1; i<num; i++) {
        arr.push(total);
        total = arr[i] + arr[i-1];
        

    }
    return arr
}



function fibsRec (num) {
    if(num < 1 || isNaN(num)) return "Invalid Parameter";

    if(num === 1) return [0];

    if(num === 2) return [0, 1];

    return [...fibsRec(num-1), fibsRec(num-1)[num-2]+fibsRec(num-1)[num-3] ]
    

 }

 
console.log(fibsRec(5))
