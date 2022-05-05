// 1 FUNCIÓ PER FER CLICK AL BOTÓ AFEGIR APRETANT "ENTER"

document.addEventListener('DOMContentLoaded', keyPress("Enter"))

function keyPress (tecla){ 
    let inputElement = document.getElementById('inputToDo');
    inputElement.addEventListener("keypress", function(keyAction) {
        if (keyAction.key === tecla) {

          document.getElementById("botoAdd").click();
        }
    }
)};

// 2 FUNCIÓ PER TROBAR L'ÍNDEX DE L'ELEMENT DINS DE L'ARRAY

function whatIndex(id, arry){
    let index = arry.findIndex(arryItem => arryItem.id === id);
    return index
}

// OBJECTE LLISTA

const toDoList = {
    list:["task 1", "task 2", "task 3"
    ],

    // RENDER LLISTA

    renderList () {
    let listZone = "";
    
    for (let listElement of this.list){
        listZone += `<li class="toDo">${listElement}<button id=${this.list.indexOf(listElement
            )} class="button_delete">DELETE</button>
            <button id=${this.list.indexOf(listElement
            )} class="button_edit">EDIT</button></li>`
    }

    let listDOM = document.getElementById("list_container");
    listDOM.innerHTML=listZone;
    },

    // addToDo () {
    //     let inputValue = document.getElementById('inputToDo').value;
        
    //     if (inputValue.length > 0){   
    //         let toDo = {
    //             task:`${inputValue}`,
    //             id: Math.floor((Math.random() * 100) + 1),
    //             status:false,
    //             lock: false,
    //         }
    //         console.log(toDo)
            
    //     this.list.push(toDo);
    //     document.getElementById('inputToDo').value="";
    //     this.renderList();
    //     }
    // },
}

