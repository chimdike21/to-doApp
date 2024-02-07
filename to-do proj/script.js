function addTask(){
    var taskInput= document.getElementById('task-input');
    var taskList= document.getElementById('task-list');

    if(taskInput.value===""){
        alert("Please enter a task!");
        return;
    }

    var listItem= document.createElement("li");
    listItem.textContent=taskInput.value;

    listItem.addEventListener("click", function(){
        markAsCompleted(listItem)
    })

    taskList.appendChild(listItem)

    taskInput.value="";
}

function markAsCompleted(task){
    var completedList= document.getElementById('completed-list');
    task.style.textDecoration="line-through";
    completedList.appendChild(task);

    task.removeEventListener("click", markAsCompleted);
}