// Q => write a function that tells wheather a triangle is 
// equilateral(3,3,3)
// isosceles(3,4,4)
// scalene(1,2,3)

const triangleType = (s1, s2, s3) => {
    if (s1 === s2 && s2 === s3) return 'Equilateral'

    else if (s1 === s2 || s1 === s3 || s2 === s3)  return "Isosceles"

    else return "Scalene" 
}

let side1 = 1
let side2 = 2
let side3 = 3
let ans = triangleType(side1, side2, side3)
console.log(ans);
