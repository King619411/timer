
const beep = () => {
  console.log('beep');
  process.stdout.write('\x07');
};

const numbers = process.argv.splice(2) // Remove the first two arg node etc

const delayedAlerts = () => { 
  if (numbers.length < 1) { 
  return;
  }
  for (const element of numbers){
      let intElement = parseInt(element) //function parses a string argument and returns an integer
     // console.log(intElement)
      if (intElement >= 0) {
        setTimeout(beep, intElement* 1000) 
      }
  }
}
 

delayedAlerts()

// remove strings 
//console.log(numbers)

// let delay = 100;

// spinyThing.forEach((spinyThing) => {
//     setTimeout(() => {
//         process.stdout.write(spinyThing);
//     }, delay);
//     delay += 200;
// })

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// node timer1.js 10 3 5 15 9 

/*
For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
  -> If input = null, then return null (null being no beeps)
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  -> if input =< 0, then return null(null being no beeps)
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


*/
