const add2 = document.querySelector(".add2")

function addTask() {
    const taskText = [
        "Create initial layout for homepage",
        "Fixing icons with transparant background",
        "Discussions regarding workflow improvement",
        "Create quotation for app redesign project"
    ]
    
    const statusText = [
        {
            text: "Approved",
            style: "approved"
        }
        ,
        {
            text: "In Progress",
            style: "inprogress"
        },
        {
            text: "Review",
            style: "review"
        },
        {
            text: "Waiting",
            style: "waiting"
        }
    ]
    
    const randTask = Math.trunc(Math.random() * 4)
    const randStatus = Math.trunc(Math.random() * 4)



    // take tasks element
    const tasks = document.querySelector('#tasks') // ul - root
    // // create list element (parent)
    const list = document.createElement('li')

    // create anonymous div
    const div1 = document.createElement('div') // for task
    const div2 = document.createElement('div') // for status

    // create task element
    const task = document.createElement('div')
    task.classList.add("task")
    div1.innerText = taskText[randTask]

    // create checkbox element
    const checkboxDiv = document.createElement('div')
    const checkbox = document.createElement('input')
    checkboxDiv.classList.add('checkbox')
    checkbox.setAttribute('type', 'checkbox')

    // validate the status
    if (statusText[randStatus].text === 'Approved' || statusText[randStatus].text === 'In Progress') {
        checkbox.setAttribute('checked', 'checked')
    } else {
        checkbox.setAttribute(null, null)
    }
    
    checkboxDiv.appendChild(checkbox)
    task.appendChild(checkboxDiv)
    task.appendChild(div1)
    
    // create status element
    const statusEl = document.createElement('div')
    statusEl.classList.add(statusText[randStatus].style)
    statusEl.innerText = statusText[randStatus].text
    div2.appendChild(statusEl)
    
    


    // root appending
    list.appendChild(task)
    list.appendChild(div2)
    tasks.appendChild(list)
}

add2.addEventListener("click", addTask)
