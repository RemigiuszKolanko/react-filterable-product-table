import React, { Component } from 'react';

import ProductRow from './ProductRow/ProductRow';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import './ProductTable.css';

class ProductTable extends Component {

    render() {
        let category = '';
        const productTable = [];
        
        this.props.products.forEach((product) => {
        if (category !== product.category) {
            category = product.category;
            productTable.push(<ProductCategoryRow category={category} />);
        }
        productTable.push(<ProductRow product={product} />);
        });

        return (
            <table className="Table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productTable.map((product, index) => {
                        return <tr key={index}>
                                {product}
                            </tr>;
                    })}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;