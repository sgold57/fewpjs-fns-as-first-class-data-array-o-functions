function wakeDog(dogName, dogBreed){
  let wakeDogString = `Wake ${dogName} the ${dogBreed}` 
  console.log(wakeDogString)
  return wakeDogString
}

function leashDog(dogName, dogBreed){
  let leashDogString = `Leash ${dogName} the ${dogBreed}` 
  console.log(leashDogString)
  return leashDogString
}

function walkToPark(dogName, dogBreed){
  let walkDogString = `Walk to the park with ${dogName} the ${dogBreed}` 
  console.log(walkDogString)
  return walkDogString
}

function throwFrisbee(dogName, dogBreed){
  let throwFrisToDogString = `Throw the frisbee for ${dogName} the ${dogBreed}` 
  console.log(throwFrisToDogString)
  return throwFrisToDogString
}

function walkHome(dogName, dogBreed){
  let walkDogHomeString = `Walk home with ${dogName} the ${dogBreed}` 
  console.log(walkDogHomeString)
  return walkDogHomeString
}

function unleashDog(dogName, dogBreed){
  let unleashDogString = `Unleash ${dogName} the ${dogBreed}` 
  console.log(unleashDogString)
  return unleashDogString
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  const finalArray = []
  for (let activity = 0; activity < routine.length; activity++){
    finalArray.push(routine[activity](dogName, dogBreed))
  }
  return finalArray
}
// routine.push(wakeDog(dogName, dogBreed))
// routine.push(leashDog(dogName, dogBreed))
// routine.push(walkToPark(dogName, dogBreed))
// routine.push(throwFrisbee(dogName, dogBreed))
// routine.push(walkHome(dogName, dogBreed))
// routine.push(unleashDog(dogName, dogBreed))


