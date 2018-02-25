function Task(isCompleted, name, date, id) {
    this._isCompleted = isCompleted;
    this._name = name;
    this._date = date;
    this._id = id;
}
Task.prototype.getIsCompleted = function () {
    return this._isCompleted;
}
Task.prototype.setIsCompleted = function (isCompleted) {
    this._isCompleted = isCompleted;
}
Task.prototype.getName = function () {
    return this._name;
}
Task.prototype.setName = function (name) {
    this._name = name;
}
Task.prototype.getDate = function () {
    return this._date;
}
Task.prototype.setDate = function (data) {
    this._date = data;
}
Task.prototype.getId = function () {
    return this._id;
}