// This program takes a prompt

// Take a parameter of happines, sadness and heart rate for today from 1 to 9
// 1 is the least parameter, 5 is neutral parameter, and 9 is the biggest parameter
const paramHappyOrSad = 1;
const paramHeartRate = 2;

// Checking if the parameter is high or low
// If it's high it'll return true, if it's low it'll return false
const checkHighOrLow = parameter => parameter > 5 ? true : false;

// Convert the parameter heart rate, so it'll give the correct emotion on the array that stored in the object.
const convertHeartRate = parameter => parameter > 5 ? parameter - 6 : parameter === 5 ? parameter - 2 : parameter - 1;
let HOL = checkHighOrLow;

// Convert heartrate for matching arrray sorting
// if heartrate is lower than 5 then i have to be arranged backwards
function heartRateArray(heartRate) {
    // If the heartrate is less than 5
    let returnedRate;
    const arrayRate = [4, 3, 2, 1];
    const convertRate = [0, 1, 2, 3];
    if (heartRate === 5) {
        returnedRate = 0;
    } else if (heartRate < 5) {
        arrayRate.forEach((rate, index) => {
            if (heartRate === rate) {
                returnedRate = convertRate[index];
            }
        })
    } else {
        returnedRate = convertHeartRate(heartRate);
    };
    return returnedRate;
}

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
heartRate = heartRateArray(paramHeartRate);

emotions.forEach((emotion) => {
    // Heart rate is high
    if (emotion.happy === isHappy && emotion.high === isHigh) {
        switch (isHigh) {
            case true:
                console.log(`You're feeling ${emotion.array[heartRate]} today. Get aromatherapy, relax your body, and get a sweet deep sleep baby.`);
                isHappy ? console.log(`The feeling of ${emotion.array[heartRate]} is a great feeling. Because it's make us want to live forever. I hope you will get just good days from now on. I'm rooting for you, love ya so much teehee.`) :
                    console.log(`The feeling of ${emotion.array[heartRate]} is normal for everyone, and you can take the beautiful feeling of it. I know that you're worth it, even when the world against you. I'll be your side.`);
                break;
            default:
                console.log(`You're feeling ${emotion.array[heartRate]} today. Think a good memories on your brain, even the quitest sound will be your lullaby, you will get the sweetest dream in your life.`);
                isHappy ? console.log(`The feeling of ${emotion.array[heartRate]} is a great feeling. Sometimes you need to rest a little bit, and gather all the energy for continue your life. I'm rooting for ya.`) : console.log(`The feeling of ${emotion.array[heartRate]} is irritating, but because of that feeling you can sleep more deeply and get a full recover tommorrow. Don't forget to heal and get a rest for your body so your mentally, because yor body is not a robot. Love you so much..`);
        }
    }
});