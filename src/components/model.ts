/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

class TodoModel implements IModel {
    public todos: Array<string>;
    public onChanges: Array<any>;

    constructor() {
        this.todos = [];
        this.onChanges = [];
    }

    // 观察者模式？
    public register (changes: any) {
        this.onChanges.push(changes);
    }

    public inform () {
        this.onChanges.forEach((o) => {
            o();
        });
    }

    public addTodo (todo: string): any {
        this.todos = this.todos.concat(todo);
        console.log('in model: ', this.todos);
        this.inform();
    }

} 

export { TodoModel };