// Collection Functions (for both arrays and objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection; // Returning the original collection
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startValue = acc === undefined ? collection[0] : acc;
    let startIndex = acc === undefined ? 1 : 0;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        startValue = callback(startValue, collection[i], collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          startValue = callback(startValue, collection[key], collection);
        }
      }
    }
    return startValue;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            result.push(collection[key]);
          }
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array-Specific Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(array.length - n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (shallow) {
          newArr = newArr.concat(array[i]);
        } else {
          myFlatten(array[i], shallow, newArr);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  // Object-Specific Functions
  function myKeys(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
  
  function myValues(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(object[key]);
      }
    }
    return result;
  }
  
  // Testing examples:
  
  // myEach
  console.log(myEach([1, 2, 3], (num) => console.log(num))); // [1, 2, 3]
  console.log(myEach({a: 1, b: 2}, (value) => console.log(value))); // 1 2
  
  // myMap
  console.log(myMap([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
  console.log(myMap({a: 1, b: 2}, (value) => value * 2)); // [2, 4]
  
  // myReduce
  console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 0)); // 6
  console.log(myReduce({a: 1, b: 2, c: 3}, (acc, val) => acc + val)); // 6
  
  // myFind
  console.log(myFind([1, 2, 3], (num) => num === 2)); // 2
  console.log(myFind({a: 1, b: 2, c: 3}, (num) => num === 2)); // 2
  
  // myFilter
  console.log(myFilter([1, 2, 3, 4], (num) => num % 2 === 0)); // [2, 4]
  console.log(myFilter({a: 1, b: 2, c: 3}, (num) => num % 2 === 0)); // [2]
  
  // mySize
  console.log(mySize([1, 2, 3])); // 3
  console.log(mySize({a: 1, b: 2, c: 3})); // 3
  
  // myFirst
  console.log(myFirst([1, 2, 3])); // 1
  console.log(myFirst([1, 2, 3], 2)); // [1, 2]
  
  // myLast
  console.log(myLast([1, 2, 3])); // 3
  console.log(myLast([1, 2, 3], 2)); // [2, 3]
  
  // mySortBy (BONUS)
  console.log(mySortBy([3, 1, 4, 2], (num) => num)); // [1, 2, 3, 4]
  
  // myFlatten (BONUS)
  console.log(myFlatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
  console.log(myFlatten([1, [2, [3, [4]]]], true)); // [1, 2, 3, [4]]
  
  // myKeys
  console.log(myKeys({a: 1, b: 2})); // ['a', 'b']
  
  // myValues
  console.log(myValues({a: 1, b: 2})); // [1, 2]
  