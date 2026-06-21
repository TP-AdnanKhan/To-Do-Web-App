let container = document.querySelector(".container");
let item = document.querySelector(".item");
let info = document.querySelector(".inputInfo");
let inputText = document.getElementById("inputText");
let information;

let filter=document.querySelector(".filter"); //adding it here for special case where : new item is created while the filter value is set to "completed"; the new item
// will be by default have "active" value :- so we add a case to hide the item after creation in this case.

// create new element - step1: presenting the input box
let create = document.querySelector(".create");
create.addEventListener("click", () => {
  info.classList.remove("hide");
  info.focus();
});

// create new element - step2: adding even to confirm button to add new item
let confirmBtn = document.querySelector(".confirm");
confirmBtn.addEventListener("click", () => {
  info.classList.add("hide");

  information = inputText.value; // value inside <input type="text" id="inputText" placeholder="Enter text here...">

  if (information.trim() != "") {
    //it adds new element only when input will have any character in it
    let i = document.createElement("div");
    i.className = "item active";
    i.innerHTML = `<span class="tickStatus">
        <button class="tickbox notick"><i class="fa-regular fa-square"></i></button>
      <button class="tickbox tick hide"><i class="fa-solid fa-square-check"></i>
      </button></span>
      
      <span class="text">${information}</span>

      <span>
        <button class="edit"><i class="fa-solid fa-pencil"></i></button>
      <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </span>`;
    container.append(i);
    if(filter.value=="completed"){//checking if filer value is "completed" ; if yea then hide.
      i.classList.add("hide");
    }
  }

  inputText.value = ""; //resetting the input new window
});

// removing/deleting an item
//1.)using event object 'e' bcs the items are added dynamically so noraml wasy will not work
//2.)checking if the click event in conatiner was done on trash button
container.addEventListener("click", (e) => {
  if (e.target.closest(".trash")) {
    e.target.closest(".item").remove();
  }
});

// editing an existing item - step1 : presenting editing input box
let text = null;

container.addEventListener("click", (e) => {
  if (e.target.closest(".edit")) {
    let editInfo = document.querySelector(".editInfo");
    editInfo.classList.remove("hide");

    text = e.target.closest(".item").querySelector(".text"); //storing the .text span of that item
  }
});

// editing an existing item - step2 : changing the value
let confirmMod = document.querySelector(".confirmModification");
confirmMod.addEventListener("click", () => {
  let inputEdited = document.querySelector("#inputEdited");
  let modInfo = inputEdited.value;

  if (modInfo.trim() != "")
    //putting the modified information(modInfo) into .text
    text.innerText = modInfo;

  inputEdited.value = ""; //resetting the modify window

  let editInfo = document.querySelector(".editInfo");
  editInfo.classList.add("hide");
});


//active or complete
container.addEventListener("click",(e)=>{
  if(e.target.closest(".tickbox")){
    let tick=null;
    let notick=null;

    if(e.target.closest(".notick")){
      notick=e.target.closest(".notick");
      tick=e.target.closest(".tickStatus").querySelector(".tick");
      tick.classList.toggle("hide");
      notick.classList.toggle("hide");

      let i=e.target.closest(".item");//adding completed class to div with item class
      i.classList.add("completed");
      i.classList.remove("active");
    }

    if(e.target.closest(".tick")){
      tick=e.target.closest(".tick");
      notick=e.target.closest(".tickStatus").querySelector(".notick");
      tick.classList.toggle("hide");
      notick.classList.toggle("hide");

      let i=e.target.closest(".item");//removing the completed class
      i.classList.remove("completed");
      i.classList.add("active");
    }

    text=e.target.closest(".item").querySelector(".text");
    text.classList.toggle("strike");
  }
});


//filtering task (select)
//let filter=document.querySelector(".filter"); has been done on the top.
filter.addEventListener("click",()=>{
  document.querySelectorAll(".item").forEach((currentItem,currentIndex)=>{//resets classList of all items at the begining of the event
      currentItem.classList.remove("hide");
    });
  if(filter.value=="active"){
    document.querySelectorAll(".completed").forEach((currentItem,currentIndex)=>{
      currentItem.classList.add("hide");
    });
  }
  if(filter.value=="completed"){
    document.querySelectorAll(".active").forEach((currentItem,currentIndex)=>{
      currentItem.classList.add("hide");
    });
  }
  if(filter.value=="all"){
    document.querySelectorAll(".item").forEach((currentItem,currentIndex)=>{
      currentItem.classList.remove("hide");
    });
  }
});

 

//Dark and Light Mode
let isLight=true;
function toDark(){
document.documentElement.style.setProperty("--Back"," #0F172A");
document.documentElement.style.setProperty("--Card","#1E293B");
document.documentElement.style.setProperty("--Primary","#818CF8");
document.documentElement.style.setProperty("--Secondary","#A78BFA");
document.documentElement.style.setProperty("--Text"," #F8FAFC");
document.documentElement.style.setProperty("--MutedText"," #94A3B8");
document.documentElement.style.setProperty("--Border","#334155");
document.documentElement.style.setProperty("--Success","#4ADE80");
document.documentElement.style.setProperty("--Danger","#F87171");
document.documentElement.style.setProperty("--scroll","#555");
}
 
function toLight(){
document.documentElement.style.setProperty("--Back"," #E7EAF3");
document.documentElement.style.setProperty("--Card"," #F1F3F9");
document.documentElement.style.setProperty("--Primary","#4F46E5");
document.documentElement.style.setProperty("--Secondary","#6366F1");
document.documentElement.style.setProperty("--Text","#1E293B");
document.documentElement.style.setProperty("--MutedText","#64748B");
document.documentElement.style.setProperty("--Border","#c2c3c3");
document.documentElement.style.setProperty("--Success","#22C55E");
document.documentElement.style.setProperty("--Danger","#FB7185");
document.documentElement.style.setProperty("--scroll","#aaa");
}

let dark=document.querySelector(".dark");
dark.addEventListener("click",()=>{
  dark.classList.add("hide");
  light.classList.remove("hide");
  toDark();
});

let light=document.querySelector(".light");
light.addEventListener("click",()=>{
  light.classList.add("hide");
  dark.classList.remove("hide");
  toLight();
});



//searchbar
let search=document.getElementById("search");
search.addEventListener("input",()=>{
  document.querySelectorAll(".item").forEach((item)=>{//ite resets the classList of all elements at the begining every event
    item.classList.remove("hide");
  });
  let inp=search.value.toLowerCase();
  document.querySelectorAll(".item").forEach((item)=>{
    let it=item.textContent.toLowerCase();
    if(!it.includes(inp)){
      item.classList.add("hide");
    }
  });
});
