const arr = [1, 10, 23, -2, 5]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    let min_index = arr[i]
    if (min_index > arr[i]) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < min_index) {
                min_index = arr[j]
            }
        }
    } else {
        min_index.push(newArr)
    }
} 

console.log(newArr)