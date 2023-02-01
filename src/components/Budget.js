import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, spending, currency } = useContext(AppContext);

    const upperLimit = 20000;

    const validateBudget = (value) => {
        if (value > upperLimit) {
            alert("The budget cannot exceed £"+upperLimit);
            value = upperLimit;
        }

        if (value < spending) {
            alert("You cannot reduce the budget value lower than the spending")
            value = spending;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(value)
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budget}
                    onChange={(event) => validateBudget(event.target.value)}>
                </input></span>
        </div>
    );
};

export default Budget;
