/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TodoModel } from './model.ts';

import { ItemList } from "./itemList";

const todos = ['a', 'b', 'c'];

export class AddItem extends React.Component<IAddItemProps, {}> {

    
    
    constructor (IAddItemProps: any) {
        super(IAddItemProps);
    };

    handleClick (event: __React.FormEvent) {
        let val = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["input"]).value.trim();
        if (val) {console.log(val);
            this.props.model.addTodo(val);
            ReactDOM.findDOMNode<HTMLInputElement>(this.refs["input"]).value = '';
        }  
    };

    render() {console.log('in additem render', this.props.model.todos);

        return (
            <div>
                <input type="text" ref="input"/>
                <input type="button" value="add one todo !" onClick={e => this.handleClick(e) }/>

                <ul>
                    {
                        <ItemList todos={this.props.model.todos}/>
                    }
                </ul>
            </div>
        );
    }
}