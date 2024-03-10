#!/usr/bin/env node
import index from '../src/index.js';
import brainCalc from '../games/calc-game.js';

index(brainCalc, 'What is the result of the expression?');
