import React from "react";
import { observer } from "mobx-react";
import styles from './Todos.css';

const Todos = observer(({ store }) => {
    const onKeyDown = (e) => {
        if (e.which === 13) {
            store.createTodo(e.target.value)
        }
    }
    const onClick = (id) => {
        store.completeTodo(id);
    }
    return (
        <div>
            <h1 className={styles.header} >Todos</h1>
            <p>Current Filter: {store.filter}</p>
            <div onKeyDown={onKeyDown}>Create: <input type="text" id="create" name="create" /></div>
            <h2>Current Todos:</h2>
            <div>
                <ul>
                    {store.todos.map(todo => <li className={todo.completed ? styles.complete :''} onClick={() => onClick(todo.id)} key={todo.id}>{todo.value} {todo.id}</li>)}
                </ul>
            </div>
        </div>
    );
});

export default Todos;