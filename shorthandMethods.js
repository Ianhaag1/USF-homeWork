function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    }
  }

let FavoriteNumber = 42; //answer to the universe!
const instructor = {
    firstName: 'colt',
    [FavoriteNumber] : '42 is his favorite number'
}

const instructor = {
    firstName: 'colt',
    sayHi(){
        return 'hi'
    },
    sayBye(){
        return this.firstName + 'says ciao';
    }
}

const x = createAnimal('dog','bark','woof')
x.bark()

const s = createAnimal('sheep','bleet','baaa')
s.bleet

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }