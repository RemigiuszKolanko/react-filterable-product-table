import React from 'react';
import './ProductRow.css';

const ProductRow = (props) => {
    let className = '';
    if (!props.product.stocked) {
        className = 'Red';
    }

    return (
        <>
            <td className={className}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </>
    );
}

export default ProductRow;