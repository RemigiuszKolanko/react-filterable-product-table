import React from 'react';

const Searchbar = (props) => {

    return (
        <form>
            <input
                type="text"
                placeholder="Search ..."
                value={props.inputValue}
                onChange={props.changed} />
            <br/>
            <label>
                <input
                    type="checkbox"
                    checked={props.checkboxValue}
                    onChange={props.checked} />
                Only show product in stock.
            </label>
        </form>
        
    );
}

export default Searchbar;