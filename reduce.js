

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name')  ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key) {
    arr.reduce(function(account, nextAcc){
        account.push(nextAccount[key])
        return account;
    })
}

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return [str.toLowerCase()].reduce((counts, char) => {
      if (vowels.includes(char)) {
        counts[char] = (counts[char] || 0) + 1;
      }
      return counts;
    }, {});
  }





function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc,obj){
        obj[key] = value;
        acc.push(obj);
        return acc;
    },[])
}




const i = 0

function partition(arr, callback){
    return arr.reduce(function(account, next){
        if callback(callback(next){
            account[i].push(next);
        }
        else account[i - 1].push(next);
        )
    }
    return account;
}