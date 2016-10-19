import * as React from "react";
import * as ReactDOM from "react-dom";

import { AddItem } from "./components/AddItem";
// import { ItemList } from "./components/itemList";
import { TodoModel } from './components/model.ts';

// // 放在哪里？
// declare namespace JSX { interface Element { } interface IntrinsicElements { div: any; } }





let model = new TodoModel;



function render () {console.log('in render');
    ReactDOM.render(
        <AddItem model={model} />,
        document.getElementById("example")
    );
}

model.register(render);
render();

