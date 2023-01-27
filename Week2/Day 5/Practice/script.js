//1
function alwaysHungry(arr) {
    res1 ="";
    res2 ="";
    for(var i =0;i<arr.length;i++){
        if(arr[i]==="food"){
            res1= res1 +" yummy "
        }
        else {
            res2="I'm hungry"
     }
    
 }
 
     if( res1 != "" ){
         console.log(res1);
     }
     else {
         console.log(res2);
     }
    }
    
 alwaysHungry([3.14, "food", "pie", true, "food"]);
 // this should console log "yummy", "yummy"
 alwaysHungry([4, 1, 5, 7, 2]);
 // this should console log "I'm hungry"
 //2
 function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
        if (arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3
function betterThanAverage(arr) {
    var sum = 0;
    for(var i =0;i<arr.length;i++){
        sum=(sum+arr[i]);
        
    }
        sum=sum/arr.length;
        
    var count = 0
    for(var i=0;i<arr.length;i++){
        if (arr[i]>sum){
        count=count+1
    }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//4
function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//5
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length<n){
        var one=fibArr[fibArr.length-1];
        var two=fibArr[fibArr.length-2];
        fibArr.push(one+two)
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
