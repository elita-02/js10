 
const daybtn = document.querySelector("#daybtn")
const nochbtn = document.querySelector("#nochbtn")
 
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const root =document.querySelector("#root");
console.log(input);


daybtn.addEventListener("click",()=>{
    document.body.style.backgroundColor ="blue";
    daybtn.style.Color="black";
});

nochbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor ="black";
    daybtn.style.Color="white";
});


const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');   
        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);   
        });
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value 
 = '';
    }
});




    
        // const output = document.getElementById('output');
        // input.addEventListener('keydown', function(event) {
        //     if (event.key === 'Enter') {                 // "Enter" басылганын текшерүү
        //         const value = input .value;} 
            //     if (value.trim()) {
            //         output.textContent=value
            //         output.textContent = You entered: ${value};
            //     } else {
            //         output.textContent = "Input is empty.";
            //     }
            //     input.value = ''; 
            // }
        // });
 
