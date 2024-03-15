#!/usr/bin/env node
import index from '../src/index.js';
import startBrainCalc from '../src/games/calc-game.js';

index(startBrainCalc, 'What is the result of the expression?');
