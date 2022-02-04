function algo( arr, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let a = arr[i] *arr[i] *arr[i],
                b = arr[j] *arr[j] *arr[j],
                c = arr[k] * arr[k] * arr[k];
 
                if (a == b + c || b == a + c ||
                    c == a + b)
                    return true;
            }
        }
    }
 

    return false;
}
 
// It's time complexity will be O(n^3) where O is the size of array.
// if value exists then only.     
let arr = [ 5, 1, 12, 6, 13 ];
let arr1 = arr.length;
if (algo(arr, arr1) == true)
    console.log("Yes");
else
    console.log ("No");



