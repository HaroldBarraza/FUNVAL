import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

let systemName: string = "FUNVAL";
let version: number = 1.1 ;
let userName: string = "Harold";
console.log(`==================================
  ${systemName}  ${"v "+ version}
  ¡Bienvenido, ${userName}!
==================================`);
let tituloTareas: string[] = [];
let cumple: boolean = true;
while (cumple) {
  let answer = await rl.question("Ingrese el numero de la opcion que deseia realizar: \n1. Crear una tarea \n2. Eliminar tarea a ultima tarea agregada  \n3. ver lista de tareas\n4. Salir\n");
  switch(answer){
    case "1":
      let tarea = await rl.question("Ingrese el la tarea que desea agregar: \n")
      if(tarea !=""){
        tituloTareas.push(tarea)
      }
      break
      
    case "2":
      if(tituloTareas.length > 0){
        let eliminado = tituloTareas.pop()
        console.log(`el titulo "${eliminado}" fue eliminado exitosamente\n`)
      }else{
        console.log("no hay tareas que eliminar, agregue tareas antes de eliminar\n")
      }
      break

    case "3":
      if(tituloTareas.length != 0){
        console.log("Lista de tareas: \n")
        for(let i: number = 0; i < tituloTareas.length; i++){
          console.log(`${i+1}: ${tituloTareas[i]}`)
        }
      }else{
        console.log("no hay tareas que mostrar")
      }
      break

    case "4":
      if(answer == "4"){
        console.log("el programa se cerro exitosamente\n")
        cumple = false;
      }
      break 

    default:
      console.log("elija una opcion valida\n")
      break
    }
  }

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

