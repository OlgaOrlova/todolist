function Data(storage) {
    this._storage = storage;
}
Data.prototype.add = function (task) {
    this._storage.push(task);
};
Data.prototype.getAll = function () {
    return this._storage;
};
Data.prototype.delete = function (taskId) {
    var index = 0;
    var itemIndex = 0;
    this._storage.forEach(
        function (item) {
            if (item.getId() == taskId) {
                itemIndex = index;
            }
            index++;
        }
    );

    this._storage.splice(itemIndex, 1);
};
Data.prototype.deleteAll = function () {
    return this._storage = [];
};
Data.prototype.marks = function (taskId) {
    var index = 0;

    var itemIndex = 0;
    this._storage.forEach(
        function (item) {
            if (item.getId() == taskId) {
                itemIndex = index;
            }
            index++;
        }
    );
    this._storage[itemIndex].setIsCompleted(true);
};