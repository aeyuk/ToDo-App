import React from 'react'
import './CounterButton.css'
import PropTypes from 'prop-types'

function CounterButton({ by, count, setCount }) {

    function incrementCount() {
        setCount(count + by);
    }

    function decrementCount() {
        setCount(count - by);
    }

    return (
        <div className="counter">
            <span>
                <button className="button" onClick={incrementCount}>+{by}</button>
                <button className="button" onClick={decrementCount}>-{by}</button>
            </span>
        </div>
    );
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;