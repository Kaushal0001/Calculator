import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        if (input.trim() === '') {
            setResult('Error');
            return;
        }

        try {
            const evalResult = eval(input);
            setResult(evalResult);
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <h1>React Calculator</h1>
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="input"
                />
                <div id="result">{result}</div>
                <div className="buttons">
                    {['7', '8', '9', '+',
                        '4', '5', '6', '-',
                        '1', '2', '3', '*',
                        'C', '0', '=', '/'].map((btn) => (
                            <button
                                key={btn}
                                onClick={() => {
                                    if (btn === 'C') handleClear();
                                    else if (btn === '=') handleCalculate();
                                    else handleClick(btn);
                                }}>
                                {btn}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
