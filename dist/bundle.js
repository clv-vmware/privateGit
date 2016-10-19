/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var AddItem_1 = __webpack_require__(3);
	// import { ItemList } from "./components/itemList";
	var model_ts_1 = __webpack_require__(5);
	// // 放在哪里？
	// declare namespace JSX { interface Element { } interface IntrinsicElements { div: any; } }
	var model = new model_ts_1.TodoModel;
	function render() {
	    console.log('in render');
	    ReactDOM.render(React.createElement(AddItem_1.AddItem, {model: model}), document.getElementById("example"));
	}
	model.register(render);
	render();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="./interfaces.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var itemList_1 = __webpack_require__(4);
	var todos = ['a', 'b', 'c'];
	var AddItem = (function (_super) {
	    __extends(AddItem, _super);
	    function AddItem(IAddItemProps) {
	        _super.call(this, IAddItemProps);
	    }
	    ;
	    AddItem.prototype.handleClick = function (event) {
	        var val = ReactDOM.findDOMNode(this.refs["input"]).value.trim();
	        if (val) {
	            console.log(val);
	            this.props.model.addTodo(val);
	            ReactDOM.findDOMNode(this.refs["input"]).value = '';
	        }
	    };
	    ;
	    AddItem.prototype.render = function () {
	        var _this = this;
	        console.log('in additem render', this.props.model.todos);
	        return (React.createElement("div", null, 
	            React.createElement("input", {type: "text", ref: "input"}), 
	            React.createElement("input", {type: "button", value: "add one todo !", onClick: function (e) { return _this.handleClick(e); }}), 
	            React.createElement("ul", null, React.createElement(itemList_1.ItemList, {todos: this.props.model.todos}))));
	    };
	    return AddItem;
	}(React.Component));
	exports.AddItem = AddItem;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="./interfaces.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ItemList = (function (_super) {
	    __extends(ItemList, _super);
	    function ItemList(props) {
	        _super.call(this, props);
	        this.state = {
	            todos: this.props.todos
	        };
	    }
	    ;
	    ItemList.prototype.componentWillReceiveProps = function (nextProps) {
	        var _this = this;
	        if (nextProps.todos !== this.props.todos) {
	            this.setState({
	                todos: nextProps.todos
	            }, function () {
	                console.log('in will receive next props', _this.state.todos);
	            });
	        }
	    };
	    ItemList.prototype.render = function () {
	        var items = this.state.todos || [];
	        console.log('IN ITEM LIST', this.state);
	        return (React.createElement("ul", null, items.map(function (todo, i) { return (React.createElement("li", {key: "li-" + i}, todo)); })));
	    };
	    return ItemList;
	}(React.Component));
	exports.ItemList = ItemList;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="./interfaces.d.ts" />
	"use strict";
	var TodoModel = (function () {
	    function TodoModel() {
	        this.todos = [];
	        this.onChanges = [];
	    }
	    // 观察者模式？
	    TodoModel.prototype.register = function (changes) {
	        this.onChanges.push(changes);
	    };
	    TodoModel.prototype.inform = function () {
	        this.onChanges.forEach(function (o) {
	            o();
	        });
	    };
	    TodoModel.prototype.addTodo = function (todo) {
	        this.todos = this.todos.concat(todo);
	        console.log('in model: ', this.todos);
	        this.inform();
	    };
	    return TodoModel;
	}());
	exports.TodoModel = TodoModel;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map