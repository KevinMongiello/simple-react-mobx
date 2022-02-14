import React from "react";
import { observer } from "mobx-react";
import styles from './Todos.css';

const Todos = observer(({ store }) => {
    const [input, setInput] = React.useState('');
    const onKeyDown = (e) => {
        if (e.which === 13) {
            store.createTodo(e.target.value)
            setInput('');
        }
    }
    const onChange = e => {
        setInput(e.target.value)
    }
    const onClick = (id) => {
        store.completeTodo(id);
    }
    const onClearCompleted = () => {
        store.clearCompleted();
    }
    return (
        <div>
            <h1 className={styles.header} >Todos</h1>
            <p>Current Filter: {store.filter}</p>
            <div onKeyDown={onKeyDown}>Create: <input type="text" id="create" name="create" onChange={onChange} value={input} /></div>
            <h2>Current Todos:</h2>
            <div>
                <ul>
                    {store.todos.map(todo => <li className={todo.done ? styles.done :''} onClick={() => onClick(todo.id)} key={todo.id}>{todo.value}</li>)}
                </ul>
            </div>
            <button onClick={onClearCompleted}>Clear Completed Todos</button>
        </div>
    );
});

export default Todos;