function View() {

}

View.prototype.init = function () {
    this.mainBlock = document.createElement("div");
    this.mainBlock.className = "mainBlock";
    var input = this.addInput();
    this.addButton("Remove all", "removeAll");
    this.addButton("Add", "add");
    this.list = document.createElement("ul");
    this.mainBlock.appendChild(this.list);
    document.body.appendChild(this.mainBlock);
    var self = this;
    this.mainBlock.addEventListener("click", function (event) {
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

View.prototype.addButton = function (buttonName, action) {
    var buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = buttonName;
    buttonAdd.type = "button";
    buttonAdd.setAttribute("action", action);
    this.mainBlock.appendChild(buttonAdd);
}

View.prototype.addInput = function () {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "input";
    document.body.appendChild(input);
    return input;
}
View.prototype.showTaskList = function (items) {
    this.list.innerHTML = "";
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
        this.list.appendChild(li)
    }
};


View.prototype.add = function () {
    controller.add(this.input.value);
};
View.prototype.remove = function (taskId) {
    controller.remove(taskId);
};
View.prototype.mark = function (taskId) {
    controller.mark(taskId);
};
View.prototype.removeAll = function () {
    controller.removeAll();
};

var view = new View();
view.init();
var controller = new Controller(view, new Data([]));