

new Set([1,1,2,2,3,4]) // this should return {1,2,3,4}\



[...new Set("referee")].join("") // this returns ref



let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Arr(3)=>true}
// 1: {Arr(3)=>false}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function Vowel(char){
    return 'a e i o u'.includes(char)
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCase = char.toLowerCase()
        if(vowelCount(lowerCase)){
            vowelMap.set(lowerCase, vowelMap.get(lowerCase) +1){
            else{
                vowelMap.set(lowerCase, 1);
            }
        }
    }
}