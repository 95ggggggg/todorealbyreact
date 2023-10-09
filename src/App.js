import './App.css';
import './components/TodoBoard';
import {useState} from "react";
import TodoBoard from "./components/TodoBoard";

function App() {

    const [inputValue, setInptValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        // console.log("Function addItem");
        setTodoList([...todoList, inputValue]);
        setInptValue('');
    };

    return (
        <div className="App">
            <div>
                <input type="text" value={inputValue} onChange={(event) => {
                    // console.log(event.target.value);
                    setInptValue(event.target.value);
                }}></input>
                <button onClick={addItem}>추가</button>
            </div>

            <TodoBoard todoList={todoList}/>
        </div>
    );
}

export default App;
