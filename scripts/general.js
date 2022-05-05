import {toDoList} from "./toDo_llista";

// 1 CREAR FUNCIÓ PER RENDERITZAR UNA TASK APRETANT "ENTER" ASSOCIAT AL BOTÓ AFEGIR

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
