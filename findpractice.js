const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  

function findUserByUsername(usersArray, username) {
   return usersArray.find(function(input){
    return input.username === username;
   })
   //if(username === -1){
   // return undefined // not needed 
   }

function removeUser(usersArray, username){
    var found = usersArray.findIndex(function(user){
        return user.username === username;
    })
    if(found === -1) return;

    return usersArray.splice(found, 1)[0];
}