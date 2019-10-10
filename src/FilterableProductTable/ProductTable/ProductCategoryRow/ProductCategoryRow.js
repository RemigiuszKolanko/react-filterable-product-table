import React from 'react';
import './ProductCategoryRow.css';

const ProductCategoryRow = (props) => {
    return (
        <td className="Category" colSpan="2">{props.category}</td>
    );
}

export default ProductCategoryRow;