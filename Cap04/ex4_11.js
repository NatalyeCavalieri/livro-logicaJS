// Create a program that reads the permitted speed on a road and the a driver's speed. If the permitted speed is lower or the same , show "Without fine". If the speed is up to 20% greater than the permitted, show "small fine". And, if the speed is higher to 20% of permitted speed, show "Severe Fine".

const prompt = require("prompt-sync")()

const speedMax = Number(prompt("Permitted speed: "))
const speedDriver = Number(prompt("Driver's speed: "))

//Traditional condition
if (speedDriver <= speedMax) {
  console.log("Without fine")
} else if (0.2 * speedMax + speedMax >= speedDriver) {
  console.log("Small fine")
} else {
  console.log("Severe fine")
}

// Ternary condition
const fine = speedDriver <= speedMax ? "Without fine" : 0.2 * speedMax + speedMax >= speedDriver ? "Small fine" : "Severe fine"
console.log(fine)