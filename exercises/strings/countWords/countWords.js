/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  let array =[];
  for (x of string){
    if (x === ' '){
      array.push(1)
    }
    console.log(array)
    return array.length +1
  }
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');
  console.log(countWords('Hello, how are you doing today?'))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countWords;
