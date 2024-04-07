// Q => count a specific character in a word

// input => "sAniyaj"  count => 'a'   output => 2

const charCount =(word, chr) =>{
    word = word.toLowerCase()
    chr = chr.toLowerCase()
    let count = 0
    for(let i = 0; i< word.length; i++){
        if (word[i] == chr)
        count += 1
    }
    return count
}

let word = "SaNiyAj"
let ans = charCount(word, 'A')
console.log(ans);
