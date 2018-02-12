let raceNumber = Math.floor(Math.random()*1000);
let registeredEarly = false;
let runnerAge = 35;

if (registeredEarly !== true) {
  raceNumber += 1000;
};

if ((runnerAge >= 18) && (registeredEarly == true)) {
  console.log(`Your race number is ${raceNumber}. Your race start time is 9:30am.`);
} else if ((runnerAge >= 18) || (!registeredEarly == true)) {
  console.log(`Your race number is ${raceNumber}. Your race start time is 11:00am.`);
} else if ((runnerAge < 18) && (registeredEarly == false)) {
  console.log(`Your race number is ${raceNumber}. Your race start time is 12:30pm.`);
} else {
  console.log('Please see the registration desk.');
}
