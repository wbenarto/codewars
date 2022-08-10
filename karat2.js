/*
We have a bin of robot parts in a factory. Each part goes to a robot with a specific, unique name. Each part will be described by a string, with the name of the robot and the part name separated by an underscore, like "Rocket_arm".

All robots are made of the same types of parts, and we have a string of all of the parts required to form a complete robot. Given a list of available parts, return the collection of robot names for which we can build at least one complete robot.

Sample Input:

all_parts = [
    "Rocket_claw",
    "Rocket_sensors", 
    "Dustie_case", 
    "Rust_sensors",
    "Bolt_sensors",
    "Rocket_case",
    "Rust_case",
    "Bolt_speaker",
    "Rocket_wheels",
    "Rocket_speaker",
    "Dustie_case",
    "Dustie_arms",
    "Rust_claw",
    "Dustie_case",
    "Dustie_speaker",
    "Bolt_case",
    "Bolt_wheels",
    "Rust_legs",
    "Bolt_sensors" ]

required_parts_1 = "sensors,case,speaker,wheels"
required_parts_2 = "sensors,case,speaker,wheels,claw"

Expected Output (output can be in any order):

get_robots(all_parts, required_parts_1) => ["Bolt", "Rocket"]
get_robots(all_parts, required_parts_2) => ["Rocket"]

N: Number of elements in `all_parts`
P: Number of elements in `required_parts`
*/
var requiredParts1 = "sensors,case,speaker,wheels";
var requiredParts2 = "sensors,case,speaker,wheels,claw";

var allParts = [ 
  "Rocket_claw",
  "Rocket_sensors", 
  "Dustie_case", 
  "Rust_sensors",
  "Bolt_sensors",
  "Rocket_case",
  "Rust_case",
  "Bolt_speaker",
  "Rocket_wheels",
  "Rocket_speaker",
  "Dustie_case",
  "Dustie_arms",
  "Rust_claw",
  "Dustie_case",
  "Dustie_speaker",
  "Bolt_case",
  "Bolt_wheels",
  "Rust_legs",
  "Bolt_sensors"
];

function get_robot(all_parts, required_parts) {
  // loop through req parts, 
  // split allparts, get robot name [0] && robot parts [1]
  // check which robot contains part
  // push into result hashmap
  // if all parts there, add in array 
  // return result array
  let result = {}
  let reqParts = required_parts.split(',')
  let resArr = []
  
  for (let i=0; i<allParts.length-1;i++) {

    let robotName = allParts[i].split('_')[0]
    let robotPart = allParts[i].split('_')[1]

    if (result[robotName]) {
      result[robotName].push(robotPart)
    } else {
      result[robotName] = []
    }
    
  }
  const keys1 = Object.keys(result)

  
  for (let j=0; j<keys1.length - 1;j++) {
    console.log(result[keys1[j]])
      if (JSON.stringify(result[keys1[j]]) == JSON.stringify(reqParts)) {
        resArr.push(keys1[j])
    }
  }
  console.log(resArr)
  return resArr
}

console.log(get_robot(allParts, requiredParts1))