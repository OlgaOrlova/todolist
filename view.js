var input = document.createElement("input");
input.type = "text";
input.className = "input";
document.body.appendChild(input);
var mainBlock = document.createElement("div");


var list = document.createElement("ul");
mainBlock.className = "mainBlock";
mainBlock.appendChild(list);


function Menu(element) {
    this.add = function () {
        controller.add(input.value);
    }
    this.remove = function (taskId) {
        controller.remove(taskId);
    }
    this.mark= function (taskId) {
        controller.mark(taskId);
    }
    this.removeAll = function () {
        controller.removeAll();
    }

    var self = this;
    element.addEventListener("click", function (event) {
        var target = event.target;
        var action = target.getAttribute("action");
        var taskId = target.getAttribute("taskId");
        if (taskId) {
            self[action](taskId);
        } else if(action){
            self[action]();
        }
    });
}
new Menu(mainBlock);


addNewItemButton();
addRemoveAllButton();


function addRemoveAllButton() {
    var buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove all";
    buttonRemove.type = "button";
    buttonRemove.setAttribute("action" , "removeAll");
    mainBlock.appendChild(buttonRemove);
}

function addNewItemButton() {
    var buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = "Add";
    buttonAdd.type = "button";
    buttonAdd.setAttribute("action" , "add");
    mainBlock.appendChild(buttonAdd);
}

document.body.appendChild(mainBlock);



var controller = new Controller(new View());

function View() {

}
View.prototype.showTaskList = function (items) {
    list.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var task = items[i];
        var taskName = task.getName();
        var li = document.createElement("li");
        var taskId = task.getId();
        li.innerHTML = taskName + '<button action="mark" taskId="'  + taskId + '">mark</button>';
        li.setAttribute("action" , "remove");
        li.setAttribute("taskId" , task.getId());
        if(task.getIsCompleted()){
            li.style.background = "red";
        }
        list.appendChild(li)
    }
}