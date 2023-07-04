const list=document.createElement("ul")
const add=document.querySelector(".add");
const newTask=document.querySelector(".newTask");
const newText=document.querySelector(".newText");
document.body.appendChild(list);
let taskCount=0;
function addList()
{
    taskCount++;
    const newList=document.createElement("li");
    const newItem=document.createElement("textarea");
    const newAddItem=document.createElement("input");
    const newDelItem=document.createElement("input");
    const newText=document.createAttribute("content");
    newItem.setAttribute("class","taskContent");//任务内容的class
    newItem.value=String(newTask.value);
    //newItem.appendChild(newText);
    newDelItem.setAttribute("type","submit");
    newDelItem.setAttribute("value","删除");
    newDelItem.addEventListener("click",delList);
    list.appendChild(newList);
    newList.appendChild(newItem);
    newList.appendChild(newDelItem);
    //const newText=newTask.value;
    newTask.value="";
    newTask.focus();
}
add.addEventListener("click",addList);
function delList()
{
    this.parentNode.remove();
}
