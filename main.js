//match dog names
let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = ['Max', 'HAS', "PuRple", 'dog']
// console.log(dog_string)
// console.log(dog_names)

// function findWords() {
//     let names = dog_names.map(name => {
//         if (name = dog_string) {
//             return 'Matched Dog_Name'
//         } else {
//             return 'No Matches'
//         }
//     })
// }
// console.log(findWords())
// function findWords() {
//     // console.log(dog_names.forEach(name => console.log(name)))
//     // console.log(dog_string.forEach(words => console.log(words)))
//     console.log(dog_string.split(' '))
//     for (let name = dog_names.forEach(name){
//         if (name in dog_string.split(' '));
//         { return `Matched Dog_name ${name}` }
//         else {
//         return `No matches ${name}`
//     }
// }
// )
// }

// console.log(findWords())

// function findWords() {
//     for (let name = dog_names.forEach(name => console.log(name))) {
//         for (let word = dog_string.split(' ')) {
//             if (name = word) {
//                 return `Matched dog_name: ${name}`
//             } else {
//         return `No matches found: ${name}`}
//     }
// }

// console.log(findWords())

// function findWords() {
//     for (let name = dog_names.forEach(name => console.log(name)));
//     for (let word = dog_string.split(' ').forEach(item = console.log(item)));
//     if (name = word) {
//                 return `Matched dog_name: ${name}`
//             } else {
//                 return `No Matches: ${name}`
//             }
// }

// console.log(findWords())


// function findWords(dog_names) {
//     for (let word = console.log(dog_string.split(' ')))
//         {
//             if (dog_names = word)
//         {
//             return `Matched name: ${dog_names}`
//         } else
//     {
//         return `No matches: ${dog_names}`
//     }
// }
// }

function findWords() {
    if (dog_string.toLocaleLowerCase().includes(dog.toLowerCase())) {
        console.log("Matched", dog);
    } else {
        console.log('No matches')
    }
}
findWords(dog_string, dog_names)

given_arr = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

console.log(given_arr.splice(0, 1, 'even') && given_arr.splice(2, 1, 'even') && given_arr.splice(4, 1, 'even'))
console.log(given_arr)


//codewars problems
// num = 3
function square(num) {
    return num ** 2
}

// sample test: const { assert } = require('chai');

// describe("Tests", () => {
//     it("test", () => {
//       assert.strictEqual(square(3), 9);
//     });
//   });



function mouthSize(animal) {
    console.log(animal)
    if (animal.toLowerCase() == 'alligator') {
        return 'small'
    } else {
        return 'wide'
    }
}
console.log(mouthSize('alligaTor'))
/////////
function switchItUp(number) {

    if (number == 0) {
        return 'Zero'
    }
    else if (number == 1) {
        return 'One'
    }
    else if (number == 2) {
        return 'Two'
    }
    else if (number == 3) {
        return 'Three'
    }
    else if (number == 4) {
        return 'Four'
    }
    else if (number == 5) {
        return 'Five'
    }
    else if (number == 6) {
        return 'Six'
    }
    else if (number == 7) {
        return 'Seven'
    }
    else if (number == 8) {
        return 'Eight'
    }
    else if (number == 9) {
        return 'Nine'
    }
    else {
        return number
    }
}

/////
function stringToArray(string) {
    return string.split(' ')
}