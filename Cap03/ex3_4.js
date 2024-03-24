// create a program for a veterinarian, that read the weight of a feed in kg and the how much a cat eat to day of feed  in grams. Inform how many days will last the feed and the how much leftovers of feed (grams)

const prompt = require("prompt-sync")()
const weightFeed = Number(prompt("Weight feed(kg): "))
const eatDay = Number(prompt("Consumptions to day(grams): "))

const durationFeedDay= Math.floor(weightFeed * 1000 / eatDay)
const leftovers = weightFeed * 1000 % eatDay 

console.log(`Duration of feed is: ${durationFeedDay} days`)
console.log(`The leftovers of feed is: ${leftovers} grams`)
