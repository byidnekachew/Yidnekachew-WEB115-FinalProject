console.log("Log of task manager events")
console.log("")
console.log("")

let tasks = []
const taskmanager = document.getElementById('taskmanager')

document.getElementById('submit').addEventListener("click", () => {
    const temp = {
        id: 1,
        name: document.getElementById('taskName').value,
        priority: document.getElementById('taskPriority').value,
        isImportant: document.getElementById('taskImportance').value,
        isCompleted: false,
        date: "date",
    }

    tasks.push(temp)
    console.log(JSON.stringify(temp))

    updateManager()
})

function updateManager(){
    taskmanager.innerHTML = ""
    for(i of tasks){
        const task = document.createElement("div")

        task.innerHTML += `Task Name: ${i.name}<br>Priority: ${i.priority}<br>Date: ${i.date}<br>Task Complete?`

        const completeTask = document.createElement('input')
        completeTask.type = "checkbox"
        task.appendChild(completeTask)
        completeTask.addEventListener("click", () => {
            task.style = ""
        })

        task.innerHTML += `<br>`
        const deleteTask = document.createElement('button')
        deleteTask.innerHTML =  `Delete Task`
        task.appendChild(deleteTask)
        deleteTask.addEventListener("click", () => {
            i.isCompleted = true
        })
        

        if(i.isImportant){
            task.style = ""
        }
        if(i.isCompleted){

        }

        task.innerHTML += `<br><br><br>----------------------<br><br>`
        taskmanager.appendChild(task)
    }
}

