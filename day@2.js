// Q => generate hash code from a string 
// Rule => 
// 1. every word will start with capital letter and no white space will be there
// 2. hash code will start with #
// input => "hi i am saniyaj"   output => "#HiIAmSaniyaj"

const generateHash = (inpStr) => {

    let words = inpStr.split(" ")
    let genHash = "#"

    for(let i =0; i < words.length; i++){
        genHash += words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }

    // let newWords = words.map((word) => {
    //     return word.replace(word[0], word[0].toUpperCase())
    // })
    
    // for(let i =0; i < newWords.length; i++){
    //     genHash += newWords[i]
    // }

    return genHash
}

let inptStr = "hi i am saniyaj          and let's generate    a hash code"
let ans = generateHash(inptStr)
console.log(ans); 