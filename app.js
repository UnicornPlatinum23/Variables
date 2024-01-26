// Animal variables
let animal1 = "Lion";
let animal2 = "Elephant";
let animal3 = "Giraffe";
let animal4 = "Penguin";
let animal5 = "Kangaroo";

// Characteristics of animals
let lionSound = "Roar";
let elephantSound = "Trumpet";
let giraffeSound = "Bleat";
let penguinSound = "Honk";
let kangarooSound = "Chortle";

// Print information about animals
console.log(`1. The ${animal1} makes a sound like "${lionSound}".`);
console.log(`2. The ${animal2} makes a sound like "${elephantSound}".`);
console.log(`3. The ${animal3} makes a sound like "${giraffeSound}".`);
console.log(`4. The ${animal4} makes a sound like "${penguinSound}".`);
console.log(`5. The ${animal5} makes a sound like "${kangarooSound}".`);

// Array of animals
let animalsArray = [animal1, animal2, animal3, animal4, animal5];

// Print each animal from the array
console.log("\nAnimals in the array:");
for (let i = 0; i < animalsArray.length; i++) {
    console.log(`${i + 1}. ${animalsArray[i]}`);
}

// Function to display a random animal
function getRandomAnimal() {
    let randomIndex = Math.floor(Math.random() * animalsArray.length);
    return animalsArray[randomIndex];
}

// Display a random animal
console.log(`\nRandom animal: ${getRandomAnimal()}`);