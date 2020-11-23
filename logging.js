/**
* The loggingapp program implements an application that determines how many 
* logs of particular lengths which weight 20kg/M can be loaded onto a truck 
* with a weight capacity of 1100 kg.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-23 
*/

// Comment below prevents require/process errors in eslint stylechecking
/*eslint no-undef: "error"*/
/*global require, process*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// input
rl.question('Input log length (1, 0.5, 0.25) : ', (answer) => {

  // output + process
  console.log(`Truck capacity: ${1100 / (answer * 20)} logs`);

  rl.close();
});