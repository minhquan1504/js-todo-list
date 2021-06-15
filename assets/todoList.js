class TodoList {
    constructor() {
        this.list = [];
    }

    createAction(val) {
        if (val) {
            this.list.push(val);
        }
    }

    readAction(index) {
        if (this.list[index]) {
            return this.list[index];
        }
    }

    updateAction(index, val) {
        if (this.list[index]) {
            this.list[index] = val;
        }
    }

    deleteAction(index) {
        if (this.list[index]) {
            this.list.splice(index, 1);
        }
    }

    deleteAllAction() {
        this.list = [];
    }

    saveAction(key) {
        localStorage.setItem(key, JSON.stringify(this.list));
    }

    loadAction(key) {
        let list = localStorage.getItem(key);
        if (list) {
            this.list = JSON.parse(list);
        }
    }
}