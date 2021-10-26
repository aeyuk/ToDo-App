import { useState } from 'react'
import CounterButton from './CounterButton'
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <h3>Cate's Calculator</h3>
            <CounterButton by={1} count={count} setCount={setCount}/>
            <CounterButton by={5} count={count} setCount={setCount}/>
            <CounterButton by={10} count={count} setCount={setCount}/>
            <button className="resetButton" onClick={resetCount}>RESET</button>
            <div>
                <span className="count">{count}</span>
            </div>
        </div>
    ) 
}

export default Counter;