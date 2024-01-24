import './header.css';
import React, { useState, createContext } from 'react';
import Header from './header';
import Section from './section';
const Total = createContext();

export default function List() {
    let [amount1, setAmount1] = useState(0);
    let [amount2, setAmount2] = useState(0);
    let [amount3, setAmount3] = useState(0);

    return (
      <>
            {/* Provide the context value */}
            <Total.Provider value={[amount1, amount2, amount3]}>
            <Header/>
            <div className="list">
                <div className='abc'>
                    <h3>Nike shoes1</h3>
                    Price: $100
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount1}</span></span>
                    <button className='b1' onClick={() => setAmount1(amount1 + 1)}>+L</button>
                    <button className='b1' onClick={() => setAmount1(amount1 + 1)}>+M</button>
                    <button className='b1' onClick={() => setAmount1(amount1 + 1)}>+S</button>

                </div>
                <div className='abc'>
                    <h3>Nike shoes2</h3>
                    Price: $150
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount2}</span></span>
                    <button className='b1' onClick={() => setAmount2(amount2 + 1)}>+L</button>
                    <button className='b1' onClick={() => setAmount2(amount2 + 1)}>+M</button>
                    <button className='b1' onClick={() => setAmount2(amount2 + 1)}>+S</button>
                </div>
                <div className='abc'>
                    <h3>Nike Shoes3</h3>
                    Price: $200
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount3}</span></span>
                    <button className='b1' onClick={() => setAmount3(amount3 + 1)}>+L</button>
                    <button className='b1' onClick={() => setAmount3(amount3 + 1)}>+M</button>
                    <button className='b1' onClick={() => setAmount3(amount3 + 1)}>+S</button>
                </div>
        </div>

            </Total.Provider>
            <Section/>
            </>
    );
}

// Export the context for external use
export { Total };
