function Controller(view, data) {
    this.data = data;
    this.view = view;
}

Controller.prototype.add = function (name) {
    this.data.add(new Task(false, name, new Date().toUTCString(), randomId()));
    this.showList();
};
Controller.prototype.removeAll = function () {
    this.data.deleteAll();
    this.showList();
};
Controller.prototype.remove = function (taskId) {
    this.data.delete(taskId);
    this.showList();
};
Controller.prototype.mark = function (taskId) {
    this.data.marks(taskId);
    this.showList();
};

Controller.prototype.showList = function () {
    var list = this.data.getAll();
    this.view.showTaskList(list);
};

function randomId() {
    return Math.floor(Math.random() * 100);
};