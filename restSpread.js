function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...arguments) => arguments.filter(x => x % 2 === 0)


findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

const findMin = (...arguments) => Math.min(...arguments)

mergeObjects({a:1, b:2}, {c:3, d:4});
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  const addKeyVal = (obj, key, val) => 
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;

  const update = (obj, key, val) => { let newObj = { ...obj }
  newObj[key] = val;
  return newObj;}