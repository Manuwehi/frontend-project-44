#!/usr/bin/env node
import getUserName from "../src/cli.js";

const welcome = () => {
    console.log('node bin/brain-games.js' + '\nWelcome to the Brain Games!');   
}
welcome();
console.log(`Hello, ${getUserName()}!`);