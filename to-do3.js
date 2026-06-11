let addNote = document.querySelector(".addNote");
let mainDiv = document.querySelector(".maindiv");
let hiddenOne = document.querySelector(".hidden-one");
let del = document.querySelector(".edit-task.del");

//add button
addNote.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "task-row";
  div.innerHTML = `<label class="check-label">
          <input type="checkbox" class="progress">
          <span class="task-description unchecked">Untitled</span>
        </label>
        <span class="editspan">
          <button class="edit-task edt"><i class="fa-solid fa-pencil"></i></button>
          <button class="edit-task del"><i class="fa-solid fa-trash"></i></button>
        </span>`;
  let hr = document.createElement("hr");
  hr.className = "ruler";
  hiddenOne.after(div); //adding div after the hidden div
  mainDiv.insertBefore(hr, div.nextSibling); //adding hr before next div
});

//edit button
mainDiv.addEventListener("click", (e) => {
  if (e.target.closest(".edit-task.edt")) {
    let taskRow = e.target.closest(".task-row");
    let description = taskRow.querySelector(".task-description");
    description.innerText = prompt("Enter the TODO List's description.");
  }
});

//Delete button
mainDiv.addEventListener("click", (e) => {
  if (e.target.closest(".edit-task.del")) {
    taskRow = e.target.closest(".task-row");
    let hr = taskRow.nextElementSibling;
    hr.remove();
    taskRow.remove();
  }
});

//light and dark mode
let isLight = true;
function toDark() {
  document.documentElement.style.setProperty(`--clrbcklight`, `#0F172A`);
  document.documentElement.style.setProperty(`--txtclrlight`, `#F1F5F9`);
  document.documentElement.style.setProperty(`--lnkbtnlight`, `#6366F1`);
  document.documentElement.style.setProperty(`--brdrlight`, `#334155`);
  document.documentElement.style.setProperty(`--effectlight`, `#1E293B`);
  document.documentElement.style.setProperty(`--hvreffectlight`, `#2D3748`);
}

function toLight() {
  document.documentElement.style.setProperty(`--clrbcklight`, `#F1F5F9`);
  document.documentElement.style.setProperty(`--txtclrlight`, `#1E293B`);
  document.documentElement.style.setProperty(`--lnkbtnlight`, `#4F46E5`);
  document.documentElement.style.setProperty(`--brdrlight`, `#94A3B8`);
  document.documentElement.style.setProperty(`--effectlight`, `#E2E8F0`);
  document.documentElement.style.setProperty(`--hvreffectlight`, `#CBD5E1`);
}

let headerDiv = document.querySelector(".outer1");
headerDiv.addEventListener("click", (e) => {
  if (e.target.closest(".cg-mode")) {
    if (isLight) {
      e.target.closest(
        ".cg-mode"
      ).innerHTML = `<i class="fa-solid fa-moon"></i>`;
      toDark();
      isLight = false;
    } else {
      e.target.closest(
        ".cg-mode"
      ).innerHTML = `<i class="fa-notdog fa-solid fa-sun"></i>`;
      toLight();
      isLight = true;
    }
  }
});

//checkbox
let lineThrough = false;
let checkbox = document.querySelectorAll(".progress");
document.addEventListener("change", (e) => {
  //no fore each as it doesnt count dynamically added elements which means it does not work on newly added elements.
  if (e.target.matches(".progress")) {
    let element = e.target;
    let taskRow = element.closest(".task-row");
    let info = taskRow.querySelector(".task-description");
    if (element.checked) {
      info.style.textDecoration = "line-through";
      info.classList.add("checked");
      info.classList.remove("unchecked");
      lineThrough = true;
    } else {
      info.style.textDecoration = "none";
      info.classList.remove("checked");
      info.classList.add("unchecked");
      lineThrough = false;
    }
  }
});

//completed and incomplete
document.addEventListener("change",(e)=>{
  if(e.target.matches(".status")){
    let stat = e.target;
    let selected= stat.value;
    let boxes= document.querySelectorAll(".task-description");

    boxes.forEach((element) => {//resetting
    element.classList.remove("hide");
  })

    if(selected==="complete"){
      boxes.forEach((e1)=>{
        if(e1.matches(".unchecked")){
          e1.classList.add("hide");
        }
      })
    }
    if(selected==="incomplete"){
      boxes.forEach((e2)=>{
        if(e2.matches(".checked")){
          e2.classList.add("hide");
        }
      })
    }
  }
})
