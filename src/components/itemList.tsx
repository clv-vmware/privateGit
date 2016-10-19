/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from "react";

export class ItemList extends React.Component<IItemListProps, IItemState> {

    
    public state: IItemState;

    constructor (props: IItemListProps) {
        super(props);
        this.state = {
            todos: this.props.todos
        }
    };

    componentWillReceiveProps (nextProps: IItemListProps) {
        if (nextProps.todos !== this.props.todos) {
            this.setState({
                todos: nextProps.todos
            }, () => {
                console.log('in will receive next props', this.state.todos);
            });
        }
    }
    
    render() {
        let items = this.state.todos || [];
        console.log('IN ITEM LIST', this.state);

        return (
            <ul>
                {
                    items.map((todo: string, i: number) => (
                        <li key={`li-${i}`}>{todo}</li>
                    ))
                }
            </ul>
        );
    }
}