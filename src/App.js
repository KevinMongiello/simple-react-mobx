import React from "react";
import { observer } from "mobx-react";
import styles from './App.css';

// class App extends React.Component {
//    render() {
//        return (
//            <div>
//                 <h1>{this.props.store.filter}</h1>
//             </div>
//        );
//    }
// }

const App = observer(({ store }) => {
    return <h1 className={styles.blue} >{store.filter}</h1>;
})

export default App;