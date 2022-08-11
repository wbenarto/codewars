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
  

  for (let i=0; i<all_parts.length;i++) {
    const rocketName = all_parts[i].split('_')[0]
    const rocketPart = all_parts[i].split('_')[1]
    console.log(rocketName)
    if (!result[rocketName]) {
      result[rocketName]['number'] = 0
    }
    if (reqParts.includes(rocketPart)) {
      result[rocketName]['number'] += 1
    }
    if (result[rocketName]['number'] == reqParts.length) {
      resArr.push(rocketName)
    }
  }


  // console.log('what',Object.entries(result))
  // console.log(Object.entries(result).filter( e=>e[1] == reqParts.length))
  // console.log(all_parts, reqParts)
  console.log(resArr)
  console.log(result)
  return resArr
}

console.log(get_robot(allParts, requiredParts1))