
function toDoList(){
    let text = document.getElementById("text");
    let list = document.getElementById("list");

    if(text.value == ""){
        alert("First Add Your Task")
    }
    else{
        list.innerHTML += `<li><div class='listContent'>
        <div class="currentTask">${text.value}</div>
        <button class="delete">
        <ion-icon name="trash-outline"></ion-icon>
        </button>
       </div></li>`;
       text.value = "";
    }

    let del = document.querySelectorAll(".delete")
   
       for(let i=0; i<del.length; i++){
            del[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
       }

       let currentTask = document.querySelectorAll(".currentTask");

       for(let i=0; i<currentTask.length; i++){
           currentTask[i].onclick = function(){
            currentTask[i].classList.toggle("taskCompleted");
           }
       }
    

  

}