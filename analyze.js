function analyze(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length

     const object = {
         'average': avg, 
         'min': Math.min.apply(null, arr),
         'max': Math.max.apply(null, arr),
         'length':  arr.length
    }
  return object;
}

module.exports = analyze;