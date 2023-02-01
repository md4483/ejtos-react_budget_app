import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return ( 
        <div className="alert alert-success">
        <label for="currency">Currency: </label>
        <select 
            className="btn btn-success dropdown-toggle" 
            data-toggle="dropdown"
            id="currency"
            style={{marginLeft: '1rem'}}
            onChange={(event) => setCurrency(event.target.value)}>
            <option value="$" name="Dollar">$ Dollar</option>
            <option selected value="£" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Rupee">₹ Rupee</option>
        </select>
        </div>
    );
}

export default Currency