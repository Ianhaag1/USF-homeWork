function hasOddNumber(arr){
    return arr.some(function(value){
        if (value % 2 !== 0){
            return true;
        }
        return false;
    });
}

function hasAZero(num){
    return num.toString().split('').some(function(value){
        return value === '0'
    } )
}

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value)
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in value;
    })
}

function hasCertainValue(arr,key,searchValue){
    return arr.every(function(value){
        return value[key] === searchValue;
    })
}