import { useState } from "react";
function Counter() {

        const [count , setCount]=useState(0);
function increase(){
    setCount(count+1);
}
function decrease(){
    setCount(count-1);
}
function reset(){
    setCount(0);
}
    return (<div className="card">
        <h2>Counter</h2>
        <p className="big">{count}</p>
        <div className="row">
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset} className="secondary">Reset</button>
        </div>
    </div>);
}
export default Counter;

