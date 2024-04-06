// Day 1, 06-07-2024
// Q => Write a fucntion to return the longest word in a input string.

const helper = (inStr) => {
    const words = inStr.split(" ")
    let word = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > word.length) {
            word = words[i]
        }
    }
    return word
}

let inputString = "hi i am saniyaj mallik and i am a web developer"
console.log(helper(inputString)); 