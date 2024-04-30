function addfun() {
    var handing = prompt("Enter the Title:", "");
    var taskname = prompt("Enter the Task:", "");
    var assignedperson = prompt("Enter the name of the assigned person:", "");
    var assignedby = prompt("Enter the name of the assigner:", "");

    const container = document.getElementById('task');
    const newcontainer = document.createElement('div');
    newcontainer.classList.add("task1");
    newcontainer.innerHTML =
        '<span class="title">' + 'Title: ' + handing + '</span><br>' +
        '<span class="taskname">' + 'Task: ' + taskname + '</span><br>' +
        '<span class="admin">' + 'Assigned by: ' + assignedby + '</span><br>' +
        '<span class="user">' + 'Assigned to: ' + assignedperson + '</span>';

    const setoption = document.createElement('select');
    setoption.classList.add("setbox");
    const option1 = document.createElement('option');
    option1.textContent = 'Select Option';
    const option2 = document.createElement('option');
    option2.textContent = 'Todo';
    const option3 = document.createElement('option');
    option3.textContent = 'Process';
    const option4 = document.createElement('option');
    option4.textContent = 'Review';
    const option5 = document.createElement('option');
    option5.textContent = 'Complete';

    container.appendChild(newcontainer);
    newcontainer.appendChild(setoption);
    setoption.appendChild(option1);
    setoption.appendChild(option2);
    setoption.appendChild(option3);
    setoption.appendChild(option4);
    setoption.appendChild(option5);

    setoption.addEventListener('change', function() {
        const selectedValue = setoption.value;
        if (selectedValue === 'Process' ) {
            processfun(newcontainer);
        } else if (selectedValue === 'Review' ) {
            reviewfun(newcontainer);
        } else if (selectedValue === 'Complete' ) {
            completefun(newcontainer);
        } else if (selectedValue === 'Todo' ) {
            todofun(newcontainer);
        }
    });
}

function processfun(newcontainer) {
    const container1 = document.getElementById('task1');
    container1.appendChild(newcontainer);
}

function reviewfun(newcontainer) {
    const container1 = document.getElementById('task2');
    container1.appendChild(newcontainer);
}

function completefun(newcontainer) {
    const container1 = document.getElementById('task3');
    container1.appendChild(newcontainer);
}

function todofun(newcontainer) {
    const container1 = document.getElementById('task');
    container1.appendChild(newcontainer);
}

document.addEventListener("DOMContentLoaded", function() {
    
});
