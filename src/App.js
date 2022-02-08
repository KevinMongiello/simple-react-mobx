import React from "react";
import { observer } from "mobx-react";

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
    return <h1>{store.filter}</h1>;
})

export default App;