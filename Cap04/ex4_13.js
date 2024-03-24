// create a program that reads three sides and verify if its may or may not form a triangle. To form a triangle , a of sides not can be bigger than the sum of the two others. If they can form a triangle , show too what the triangle type: equilateral(3 sides the same), isosceles ( 2 sides the same) and scalene (3 sides different).

const prompt = require("prompt-sync")()

const sideA = Number(prompt("Side A: "))
const sideB = Number(prompt("Side B: "))
const sideC = Number(prompt("Side C: "))



if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
  const sides =
  sideA == sideB && sideB == sideC && sideC == sideA
  ? "This triangle is a equilateral"
  : sideA == sideB || sideB == sideC || sideC == sideA
  ? "This triangle is a isosceles"
  : "this triangle is a scalene"
  console.log("Sides may form a triangle")
  console.log(sides)
}
