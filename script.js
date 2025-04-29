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

    updateManager()
})

function updateManager(){
    taskmanager.innerHTML = ""
    for(i of tasks){
        const task = document.createElement("div")
        task.innerHTML += `Task Name: ${i.name}<br>Priority: ${i.priority}<br>Date: ${i.date}<br>`
        const deleteTask = document.createElement('button')
        deleteTask.innerHTML =  `Delete Task`
        task.appendChild(deleteTask)
        deleteTask.addEventListener("click", () => {
            for (j of task){
                if (i.id == j.id){
                    updateManager()
                    console.log('Worked')
                }
            }
        })
        task.innerHTML += `<br><br><br>`
        taskmanager.appendChild(task)
    }
}