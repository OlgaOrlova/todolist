var mainBlock = document.createElement("div");
mainBlock.className = "mainBlock";

addButton("Remove all", "removeAll");
addButton("Add", "add");
var input = addInput();

var list = document.createElement("ul");
mainBlock.appendChild(list);
document.body.appendChild(mainBlock);

var data = new Data([]);
var eventHandler = new EventHandler(mainBlock, input);


function EventHandler(rootElement, input) {
    this.add = function () {
        data.add(new Task(false, input.value, new Date().toUTCString(), randomId()));
        showTaskList(data.getAll());

    };
    this.remove = function (taskId) {
        data.delete(taskId);
        showTaskList(data.getAll());
    };
    this.mark = function (taskId) {
        data.marks(taskId);
        showTaskList(data.getAll());
    };
    this.removeAll = function () {
        data.deleteAll();
        showTaskList(data.getAll());
    };

    var self = this;
    rootElement.addEventListener("click", function (event) {
        var target = event.target;
        var action = target.getAttribute("action");
        var taskId = target.getAttribute("taskId");
        if (taskId) {
            self[action](taskId);
        } else if (action) {
            self[action]();
        }
    });
}

function addButton(buttonName, action) {
    var buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = buttonName;
    buttonAdd.type = "button";
    buttonAdd.setAttribute("action", action);
    mainBlock.appendChild(buttonAdd);
}

function addInput() {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "input";
    document.body.appendChild(input);
    return input;
}

function showTaskList(items) {
    list.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var task = items[i];
        var taskName = task.getName();
        var li = document.createElement("li");
        var taskId = task.getId();
        li.innerHTML = taskName + '<button action="mark" taskId="' + taskId + '">mark</button>';
        li.setAttribute("action", "remove");
        li.setAttribute("taskId", task.getId());
        if (task.getIsCompleted()) {
            li.style.background = "red";
        }
        list.appendChild(li)
    }
};


function randomId() {
    return Math.floor(Math.random() * 100);
};