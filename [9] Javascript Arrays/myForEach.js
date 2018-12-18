/**
 * My forEach function
 * @param {object[]} arr : array
 * @param {Function} func : function
 */
function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
// End of function myForEach

list = [1, 2, 3, 4, 5];

myForEach(list, function(variable) {
    console.log(variable);
});