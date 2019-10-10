import React, {Component} from 'react';

import Searchbar from './Searchbar/Searchbar';
import ProductTable from './ProductTable/ProductTable';

class FilterableProductTable extends Component {

    state = {
        isStockOnly: false,
        searchPhrase: '',
        products: this.props.products
    }
    

    inputHandler (event) {
        const products = this.setListOfProducts(event.target.value, this.state.isStockOnly);
        this.setState({
            searchPhrase: event.target.value,
            products: products
        });
    }

    checkboxHandler(event) {
        const products = this.setListOfProducts(this.state.searchPhrase, event.target.checked);
        this.setState({
            isStockOnly: event.target.checked,
            products: products
        });
    }

    setListOfProducts(inputValue, checkboxValue) {
        const initialProducts = [...this.props.products];

        if (inputValue && checkboxValue) {
            return initialProducts.filter(product => {
                return product.stocked && product.name.toLowerCase().includes(inputValue.toLowerCase());
            });
        }

        if (inputValue) {
            return initialProducts.filter(product => {
                return product.name.toLowerCase().includes(inputValue.toLowerCase());
            })
        }

        if (checkboxValue) {
            return this.props.products.filter(product => {
                return product.stocked;
            });
        }

        return initialProducts;

    }

    render() {
        return (
            <div>
                <Searchbar
                    changed={this.inputHandler.bind(this)}
                    checked={this.checkboxHandler.bind(this)}
                    inputValue={this.state.searchPhrase}
                    checkboxValue={this.state.isStockOnly} />
                <ProductTable products={this.state.products}/>
            </div>
        );
    }
   
}

export default FilterableProductTable;