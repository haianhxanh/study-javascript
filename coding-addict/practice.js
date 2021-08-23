/**
 * Returns an acronym of string in the `input`
 * e.g. "i have time" -> "IHT"
 */
function toAcronym(input) {
  let result = [];
  let array = input.split(" ");
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    result.push(array[i].charAt(0).toUpperCase());
    console.log(array[0]);
  }
  return result.join("");
}

/**
 * `input` is a string
 * `character` is a string of length 1
 *
 * Returns the number how many times `input` contains `character`
 * e.g. input: "aabbcc"
 *      character: "b"
 *      result: 2
 */
function countOccurrenceOfCharacter(input, character) {
  let times = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == character) {
      times++;
    }
  }
  return times;
}

/**
 * Returns a random letter (A-Z)
 * HINT: String.fromCharCode(65) = 'A'
 *       String.fromCharCode(91) = 'Z'
 */
function getRandomLetter(n) {
  let result;
  result = Math.random(n) * 100;

  return String.fromCharCode(n);
}

/**
 * * Returns a randomly generated string that cotains only letters (A-Z). `length` is the length of the generated string
 */
function getRandomString(length) {}

/**
 * `persons` is an array of objects. Each object has 4 attributes:
 * - id          1
 * - name        Lukas Pastuszek
 * - age         21
 * - address     Prague 7
 *
 *  Returns a number that is the mean age of all the people's ages in `persons` array
 */
function meanAge(persons) {}

/*
 * Write a program that prints the numbers from 1 to 100 but numbers that
 * include the digit '3' (e.g. 13) or numbers that are divisible by 3 print BOOM instead
 */
function boom() {}
