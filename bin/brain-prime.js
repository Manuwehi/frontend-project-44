#!/usr/bin/env node
import startBrainPrimeGame from '../src/games/prime-game.js';
import index from '../src/index.js';

index(startBrainPrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
