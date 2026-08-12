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
interface Task{
  id: number;
  title: string;
  completed: boolean;
}

let tituloTareas: Task[] = [];
let idTitle: number = 1
let cumple: boolean = true;

const addTask = (title:string) =>{
  const newTask: Task = {
    id: idTitle++,
    title: title,
    completed: false,
    }
  tituloTareas.push(newTask)
  console.log(`La tarea ${title} fue agregado exitosamente`)
}
const listTask = () => {
        console.log("Lista de tareas: \n")
        console.log(`N° - titulo - estado`)
        for(let i:number = 0; i < tituloTareas.length; i++){
          const tasks = tituloTareas[i];
          const estado = tasks?.completed ? "completado" : "en proceso"
          console.log(`${tasks?.id}. ${tasks?.title} ${estado}`)
        }
}

const removeTask = () => {
        let eliminado = tituloTareas.pop()
        console.log(`el titulo "${eliminado?.title}" fue eliminado exitosamente\n`)
}


while (cumple) {
  let answer = await rl.question("Ingrese el numero de la opcion que deseia realizar: \n1. Crear una tarea \n2. Eliminar tarea a ultima tarea agregada  \n3. ver lista de tareas\n4. Salir\n");
  
  switch(answer){
    case "1":
      let tarea = await rl.question("Ingrese el la tarea que desea agregar: \n")
      if(tarea !=""){
        addTask(tarea)
      }
      break
      
    case "2":
      if(tituloTareas.length > 0){
        removeTask()
      }else{
        console.log("no hay tareas que eliminar, agregue tareas antes de eliminar\n")
      }
      break

    case "3":
      if(tituloTareas.length != 0){
        listTask()
      }else{
        console.log("no hay tareas que mostrar")
      }
      break

    case "4":
        console.log("el programa se cerro exitosamente\n")
        cumple = false;
      break 

    default:
      console.log("elija una opcion valida\n")
      break
    }
  }

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

