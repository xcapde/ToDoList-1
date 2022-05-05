// import{X} from "./blblblbl.js";
// html no pot veure els nostres moduls i no llegirà el codi escrit per DOM --> fer EventListener per solventar

// 0 DEFINIR VALORS DE LES VARIABLES

let arrayToDo =[]
let listContainer = document.getElementById('toDoList');

// 1 GENERAL - CREAR FUNCIÓ PER RENDERITZAR UNA TASK APRETANT "ENTER" ASSOCIAT AL BOTÓ AFEGIR

document.addEventListener('DOMContentLoaded', keyPress("Enter"))

function keyPress (tecla){ 
    let inputElement = document.getElementById('inputToDo');
    inputElement.addEventListener("keypress", function(keyAction) {
        if (keyAction.key === tecla) {

          document.getElementById("botoAdd").click();
        }
    }
)};

// 2 GENERAL - CREAR FUNCIÓ PER TROBAR L'ÍNDEX DE L'ELEMENT DINS DE L'ARRAY AMB EL QUE VOLEU INTERACTUAR

function whatIndex(id, arry){
    let index = arry.findIndex(arryItem => arryItem.id === id);
    return index
}

// 3 RENDERITZAR LA LLISTA A LA PANTALLA

function renderToDoList(){
    listContainer.innerHTML=""

    for (const toDo of arrayToDo) {

    let item = `<li><div id="toDo_main"><button id="status" class="toDo_status_default" onclick="changeStatus(${toDo.id})"></button><div id="toDo_container">${toDo.task}</div><div id="toDo_interactions"><button id="editToDo" onclick="editToDo(${toDo.id})"><i class="fa-solid fa-pen fa-xs"></i></button><button id="lockToDo" onclick="lockToDo(${toDo.id})"><i class="fa-solid fa-lock"></i></button><button id="deleteToDo" onclick="deleteToDo(${toDo.id})"><i class="fa-solid fa-trash-can"></i></button></div></div id="text_botons_toDo"></li>`
    // CANVIAR STATUS A BOTÓ I TAL!!! I POSAR-HI EL ONCLICK
    listContainer.innerHTML += item
    }
}

// 4 AFEGIR CADA OBJECTE TODO A LA LLISTA

function addToDo (){

    let input = document.getElementById("inputToDo").value; 
            console.log(input)
    
    if (input.length>0){   
            let toDo = {
                task:`${input}`,
                status:false,
                id: Math.floor((Math.random() * 100) + 1),
                lock: false,
                // editToDo(),
                // saveEdit(),
            }
            console.log(toDo)
            
    arrayToDo.push(toDo);
    document.getElementById('inputToDo').value="";
    }

    renderToDoList()
}

// 5 ELIMINAR OBJECTE TODO DE LA LLISTA

function deleteToDo (id){
    let index = whatIndex(id, arrayToDo)
    arrayToDo.splice(index,1)
    
    renderToDoList()
}

// 6 CANVIAR L'ESTAT DE L'OBJECTE TODO

function changeStatus (id){
    let index = whatIndex(id, arrayToDo);
    let displayStatus = document.getElementById("status");
    displayStatus=false;

    console.log(arrayToDo[index].displayStatus)

        if (displayStatus === false) {
            displayStatus = true;
            displayStatus.className;"toDo_status_done";
        } else {
            displayStatus = false;
            displayStatus.className;"toDo_status_undone";
        }
        console.log(displayStatus)

    renderToDoList()
}

// 7 EDITAR ELEMENT TODO DE LA TODOLIST

    // 7a GUARDAR CANVIS FETS AL TODO
    
    // 7b CANCELAR SENSE FER CANVIS AL TODO

// 8 INPUT BUSCADOR --> al posar les primeres lletres comença a mostrar el que busquem, els ToDos que siguin iguals.

// 9 CLEAR ALL --> botó per eliminar tots els ToDo + (clear input?) --> inner html sobre body, estil pop up amb diàleg 

// 10 BLOQUEJAR L'OBJECTE TODO, NO PERMET EDITAR NI ELIMINAR


