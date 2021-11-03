
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
