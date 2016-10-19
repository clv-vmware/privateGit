

interface IItemListProps {
    todos: Array<string>
}

interface IItemState {
    todos: Array<string>;
}

interface IAddItemProps {
    model: any;
}

interface IModel {
    todos: Array<string>;
    onChanges: Array<any>;
    register(changes: any): any;
    inform(): any;
    addTodo(todo: string): any;


}