import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

let systemName: string = "FUNVAL";
let version: string = "1.0.0";
let userName: string = "Harold";
console.log(`==================================
  ${systemName}  v${version}
  ¡Bienvenido, ${userName}!
==================================`);


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();