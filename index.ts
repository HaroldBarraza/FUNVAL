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

const descontruccion_todos = (tareas: Task[]): string[] =>{
  return tareas.map((informacion) => {
    const{id, title, completed} = informacion
    const estado = completed ? "Completado" : "Pendiente"
    return`${id}, ${title}, ${estado}`
  })
}
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
  if(tituloTareas.length != 0){
    console.log("Lista de tareas: \n")
    console.log(`N° - titulo - estado`)
    const alltask = descontruccion_todos(tituloTareas)
    alltask.forEach(information=>console.log(information))
  }else{
    console.log(`la lista de tareas esta vacia`)
  }

  }

const removeTask = () => {
        let eliminado = tituloTareas.pop()
        console.log(`el titulo "${eliminado?.title}" fue eliminado exitosamente\n`)
}

const markCompleted = (numero_id: number) => {
  const tarea_select = tituloTareas.find(id_tares => id_tares.id == numero_id)
  if(tarea_select){
    tarea_select.completed = true
    const {id, title, } = tarea_select
    console.log(`se actualizo correctamente la tarea ${id}, titulo ${title} estado completado`)

  }else{
    console.log(`la tarea no existe `)
  }

}
const filterPending = () => {
  if(tituloTareas.length != 0){
    const pendientes = tituloTareas.filter(info => info.completed == false)
    const datos = descontruccion_todos(pendientes)
    console.log(`las tareas pendientes son :`)
    datos.forEach(informacion =>  console.log(informacion)
  )
  }else{
    console.log(`no hay tareas pendientes que mostrar`)
  }


}

const filterCompleted = () =>{
  if(tituloTareas.length != 0){
    const completados = tituloTareas.filter(estado => estado.completed == true)
    console.log(`las tareas completadas son :`)
    const filtrados = descontruccion_todos(completados)
    filtrados.forEach(verdaderos => { console.log(verdaderos)}
  )
  }else{
    console.log(`no hay tareas completadas que mostrar`)
  }
}





while (cumple) {
  let answer = await rl.question(`Ingrese el numero de la opcion que deseia realizar: \n
    1. Crear una tarea
    2. Eliminar tarea a ultima tarea agregada
    3. Ver lista de tareas
    4. Cambiar estado a completado 
    5. Mostrar tareas pendientes
    6. Mostrat tareas completadas
    7. Salir\n`);
  
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
      listTask()
      let id_tarea = await rl.question(`ingrese el numero de la tarea que desea cambiar el estado`)
      const id_nombre = Number(id_tarea)
      markCompleted(id_nombre)
      break

    case "5":
      filterPending()
      break

    case "6":
      filterCompleted()
      break

    case "7":
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

