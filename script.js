// Begins task log
console.log("Log of task manager events")
console.log("")
console.log("")

let tasks = [] //empty array to store objects
taskCount = 0 //helps with ids
const taskmanager = document.getElementById('taskmanager')
const date = new Date()

// Event listener creates object and adds it to list
document.getElementById('submit').addEventListener("click", () => {
    const temp = {
        id: taskCount+1,
        name: document.getElementById('taskName').value,
        priority: document.getElementById('taskPriority').value,
        isImportant: document.getElementById('taskImportance').checked,
        isCompleted: false,
        date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
    }

    taskCount+=1 //Helps with future ids
    tasks.push(temp) //adds to array
    console.log(JSON.stringify(temp)) //logs to console

    updateManager()//runs function to update the task manager again
})

function updateManager(){
    taskmanager.innerHTML = "" //clears task manager
    for(i of tasks){ //repeats for each task within list
        const task = document.createElement("div") //creates new subdiv to host eaach task

        task.innerHTML += `Task Name: ${i.name}<br>Priority: ${i.priority}<br>Date: ${i.date}<br>Task Complete?`

        // Adds completion checkbox to each task
        const completeTask = document.createElement('input')
        completeTask.type = "checkbox"
        task.appendChild(completeTask)
        completeTask.addEventListener("change", () => {
            task.style.textDecoration = "line-through"
        })

        // Adds deletion button to each task
        task.innerHTML += `<br>`
        const deleteTask = document.createElement('button')
        deleteTask.innerHTML =  `Delete Task`
        task.appendChild(deleteTask)
        deleteTask.addEventListener("click", () => {
            tasks.splice(tasks.indexOf(i),1)
            updateManager()
        })
        
        // Stylizes task in red if importance checkbox is clicked
        if(i.isImportant){
            task.style.backgroundColor = "red"
        }

        task.innerHTML += `<br><br><br>----------------------<br><br>`
        taskmanager.appendChild(task) //officially adds task to page
    }
}

