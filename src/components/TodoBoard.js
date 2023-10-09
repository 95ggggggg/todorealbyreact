import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {

    // console.log("TodoBoard Function", props.todoList);

    return (
        <div>
            <h1>TodoList</h1>
            {props.todoList.map((item)=><TodoItem key={item} item={item}/>)}
        </div>
    );
}

export default TodoBoard;
