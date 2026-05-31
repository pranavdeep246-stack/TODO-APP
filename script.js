let input=document.querySelector("#Taskinput");
let add=document.querySelector("#add");
let main=document.querySelector(".main");

function taskaddition(){
 if(input.value.trim()==""){alert("Enter some text"); return;}

 let newdiv=document.createElement("div");
 newdiv.style.display="flex";
 let tick=document.createElement("input");
 tick.type="checkbox";
 let task=document.createElement("input");
 task.type="text";
 task.value=input.value;
 let cross=document.createElement("button");

tick.classList.add("tick");
newdiv.classList.add("newdiv");
task.classList.add("task");
cross.classList.add("cross");

 newdiv.append(tick);
 newdiv.append(task);
 newdiv.append(cross);
 main.append(newdiv);
 input.value="";

}

add.addEventListener("click",taskaddition);