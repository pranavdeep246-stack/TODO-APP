let input=document.querySelector("#Taskinput");
let add=document.querySelector("#add");
let main=document.querySelector(".main");

async function loadTasks() {

    const response = await fetch("http://localhost:8080/tasks");

    const tasks = await response.json();

    tasks.forEach(taskObj => {
          const taskId = taskObj.id;
         
        let newdiv = document.createElement("div");
        newdiv.style.display = "flex";

        let tick = document.createElement("input");
        tick.type = "checkbox";
        tick.checked = taskObj.completed;

        let task = document.createElement("textarea");
        task.value = taskObj.title;
        task.readOnly = true;

        let cross = document.createElement("button");
        cross.innerText = "✖";

        tick.classList.add("tick");
        newdiv.classList.add("newdiv");
        task.classList.add("task");
        cross.classList.add("cross");

        newdiv.append(tick);
        newdiv.append(task);
        newdiv.append(cross);

        main.append(newdiv);

        tick.addEventListener("change",()=>{
    if(tick.checked){
    task.style.transform="scale(0.9)";
     task.style.opacity="0.8";
     task.style.textDecoration="line-through";
}
else{
    task.style.transform="scale(1)";
     task.style.opacity="1";
     task.style.textDecoration="none";
}});

 cross.addEventListener("click", async() => {
    await fetch(`http://localhost:8080/tasks/${taskId}`,{
        method:"DELETE"
    });
    newdiv.remove();
});
task.addEventListener("click",()=>{
    if(task.readOnly==true){
        task.blur();
    }
});

task.addEventListener("dblclick",()=>{
    task.readOnly=false;
    task.style.cursor="text";
    task.focus();
});

task.addEventListener("blur",()=>{
    task.readOnly=true;
    task.style.cursor="default";
});
task.addEventListener("input", () => {
    task.style.height = "auto";
    task.style.height = task.scrollHeight + "px";
});
task.addEventListener("blur",async()=>{
    if(task.value.trim()==""){
        await fetch(`http://localhost:8080/tasks/${taskId}`,{
        method:"DELETE"
    });
        newdiv.remove();
    }
});

    });
}


async function taskaddition(){
 if(input.value.trim()==""){alert("Enter some text"); return;}

 let newdiv=document.createElement("div");
 newdiv.style.display="flex";
 let tick=document.createElement("input");
 tick.type="checkbox";

const taskText = input.value;

await fetch("http://localhost:8080/tasks",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:taskText,
        completed:false
    })
});

let task=document.createElement("textarea");
task.value=taskText;


 task.readOnly=true;
 let cross=document.createElement("button");
 cross.innerText="✖";
 

tick.classList.add("tick");
newdiv.classList.add("newdiv");
task.classList.add("task");
cross.classList.add("cross");




 newdiv.append(tick);
 newdiv.append(task);
 newdiv.append(cross);
 main.append(newdiv);
 input.value="";

 tick.addEventListener("change",()=>{
    if(tick.checked){
    task.style.transform="scale(0.9)";
     task.style.opacity="0.8";
     task.style.textDecoration="line-through";
}
else{
    task.style.transform="scale(1)";
     task.style.opacity="1";
     task.style.textDecoration="none";
}});

 cross.addEventListener("click", async() => {
    await fetch(`http://localhost:8080/tasks/${taskId}`,{
        method:"DELETE"
    });
    newdiv.remove();
});
task.addEventListener("click",()=>{
    if(task.readOnly==true){
        task.blur();
    }
});

task.addEventListener("dblclick",()=>{
    task.readOnly=false;
    task.style.cursor="text";
    task.focus();
});

task.addEventListener("blur",()=>{
    task.readOnly=true;
    task.style.cursor="default";
});
task.addEventListener("input", () => {
    task.style.height = "auto";
    task.style.height = task.scrollHeight + "px";
});
task.addEventListener("blur",async()=>{
    if(task.value.trim()==""){
        await fetch(`http://localhost:8080/tasks/${taskId}`,{
        method:"DELETE"
    });
        newdiv.remove();
    }
});



}

add.addEventListener("click",()=>{
    taskaddition();
});

input.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
   taskaddition(); }
});
 loadTasks();
