window.onload=()=>{
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnn = document.getElementById("btn");


function addTask(){
  if(inputBox.value === ''){
    alert("YOU MUST WRITE SOMETHING IN THE BOX")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value='';
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}

btnn.onclick=()=>(addTask()); 
showData();

}

