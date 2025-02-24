// This program takes a prompt

// Take a parameter of happines, sadness and heart rate for today from 1 to 9
// 1 is the least parameter, 5 is neutral parameter, and 9 is the biggest parameter
const paramHappyOrSad = 9;
const paramHeartRate = 4;

// Checking if the parameter is high or low
// If it's high it'll return true, if it's low it'll return false
const checkHighOrLow = parameter => parameter > 5 ? true : false;

// Convert the parameter heart rate, so it'll give the correct emotion on the array that stored in the object.
const convertHeartRate = parameter => parameter > 5 ? parameter - 6 : parameter === 5 ? parameter - 2 : parameter - 1;
let HOL = checkHighOrLow;

const emotions = [{
    name: 'HappyAndRelax',
    happy: true,
    high: false,
    array: ['contented', 'serene', 'relaxed', 'calm'],
}, {
    name: 'HappyAndExcited',
    happy: true,
    high: true,
    array: ['happy', 'elated', 'excited', 'alert'],
}, {
    name: 'SadAndBored',
    happy: false,
    high: false,
    array: ['sad', 'depressed', 'lethargic', 'fatigued'],
}, {
    name: 'SadAndAngry',
    happy: false,
    high: true,
    array: ['upset', 'stressed', 'nervous', 'tense'],
}];

// Array to store the
isHappy = HOL(paramHappyOrSad);
isHigh = HOL(paramHeartRate);
console.log(convertHeartRate(paramHeartRate));

emotions.forEach((emotion) => {
    if (emotion.happy === isHappy && emotion.high === isHigh) {
        console.log(emotion.array);
    }
});